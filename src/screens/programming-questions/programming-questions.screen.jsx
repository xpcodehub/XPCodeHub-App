import React, {Component} from "react";
import "./programming-questions.style.css"
import {Header} from "../../components";
import {ProgrammingQuestionsService} from "../../services";
import ReactCanvasConfetti from "react-canvas-confetti";
import {faHouseUser, faListUl} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Redirect} from "react-router-dom";

const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
};

export class ProgrammingQuestionsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            programmingQuestions: {programmingQuestionList:[]},
            currentQuestionNumber: 0,
            answersIdChosenByStudent: new Map(),
            programmingQuestionsResult: false,
            redireciona: false
        }

        this.animationInstance = null;
        this.programmingQuestionsService = new ProgrammingQuestionsService()

        this.getProgrammigQuestions(this.props.match.params.programmingQuestionsId)
    }

    getProgrammigQuestions = async (programmingQuestionId) => {
        const programmingQuestions = await this.programmingQuestionsService.getProgrammigQuestions(programmingQuestionId);
        this.setState({
            programmingQuestions: programmingQuestions
        })
    };

    makeShot = (particleRatio, opts) => {
        this.animationInstance &&
        this.animationInstance({
            ...opts,
            origin: { y: 0.7, x: 0.2 },
            particleCount: Math.floor(300 * particleRatio)
        }) &&
        this.animationInstance({
            ...opts,
            origin: { y: 0.7, x: 0.9 },
            particleCount: Math.floor(300 * particleRatio)
        }) && this.animationInstance({
            ...opts,
            origin: { y: 0.7 },
            particleCount: Math.floor(400 * particleRatio)
        });
    };

    fireConfetti = () => {
        this.makeShot(0.25, {
            spread: 26,
            startVelocity: 55
        });

        this.makeShot(0.2, {
            spread: 60
        });

        this.makeShot(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8
        });

        this.makeShot(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2
        });

        this.makeShot(0.1, {
            spread: 120,
            startVelocity: 45
        });
    };

    getInstance = (instance) => {
        this.animationInstance = instance;
    };

    redirect = (path) => {

        this.setState({
            redireciona: path
        })
    }

    updateCurrentQuestionAndSendAnswer = async (questionId, answerId) => {
        this.state.answersIdChosenByStudent.set(questionId, answerId)

        if(this.state.answersIdChosenByStudent.size === this.state.programmingQuestions.programmingQuestionList.length) {
            const programmingQuestionsResult = await this.programmingQuestionsService.correctProgrammingQuestions(this.props.match.params.programmingQuestionsId, this.state.answersIdChosenByStudent)
            this.setState({
                programmingQuestionsResult: programmingQuestionsResult
            })

        }

        this.setState({
            currentQuestionNumber: this.state.currentQuestionNumber + 1,
        })
    };

    finishQuiz = () => {
        if(this.state.programmingQuestionsResult.correctAnswers === this.state.programmingQuestionsResult.numberOfQuestions) {
            this.fireConfetti()
        }
        return (
            <div className='score-section'>
                You scored {this.state.programmingQuestionsResult.correctAnswers} out of {this.state.programmingQuestionsResult.numberOfQuestions}!
                <div className='score-section-buttons'>
                    <FontAwesomeIcon icon={faHouseUser} className="icons-score-section" onClick={() => this.redirect(`/`)}/>
                    <FontAwesomeIcon icon={faListUl} className="icons-score-section" onClick={() => this.redirect(`/tech-steps/${this.props.match.params.techStepIdName}`)}/>
                </div>
                <ReactCanvasConfetti
                    refConfetti={this.getInstance}
                    style={canvasStyles}
                />
            </div>
        )
    }


    render() {
        if (this.state.redireciona) {
            return <Redirect to={this.state.redireciona}/>
        }

        const currentQuestion = this.state.programmingQuestions.programmingQuestionList[this.state.currentQuestionNumber]
        return (
            <>
                <div className="programming-questions-container">
                    <Header/>
                    <div className="programming-questions">
                        <div className='app'>
                            {this.state.programmingQuestions.programmingQuestionList.length === 0 ? null :
                                (
                                this.state.programmingQuestionsResult ? this.finishQuiz()  :
                                    (
                                    <>
                                        <div className='question-section'>
                                            <div className='question-count'>
                                                <span>Question {this.state.currentQuestionNumber + 1}</span>/{this.state.programmingQuestions.programmingQuestionList.length}
                                            </div>
                                            <div className='question-text'>{currentQuestion.question}</div>
                                        </div>
                                        <div className='answer-section'>
                                            {currentQuestion.answerOptions.map((answerOption) => (
                                                <button onClick={() => this.updateCurrentQuestionAndSendAnswer(currentQuestion.id, answerOption.id)}>
                                                    {answerOption.answer}
                                                </button>
                                            ))}
                                        </div>
                                    </>
                                ))}
                        </div>

                    </div>
                    <div className="programming-questions-circle-2"/>
                    <div className="programming-questions-circle-3"/>
                </div>
            </>
        );
    }
}
