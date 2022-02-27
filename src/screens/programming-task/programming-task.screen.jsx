import React, {Component} from "react";
import "./programming-task.style.css"
import {Header} from "../../components";


export class ProgrammingTaskScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

    handleAnswerOptionClick = (isCorrect) => {
    };

    render() {
        const questions = [
            {
                questionText: 'What is the capital of France?',
                answerOptions: [
                    {answerText: 'New York', isCorrect: false},
                    {answerText: 'London', isCorrect: false},
                    {answerText: 'Paris', isCorrect: true},
                    {answerText: 'Dublin', isCorrect: false},
                ],
            },
            {
                questionText: 'The default value of a static integer variable of a class in Java is?',
                answerOptions: [
                    {answerText: '0', isCorrect: true},
                    {answerText: '1', isCorrect: false},
                    {answerText: 'Garbage value', isCorrect: false},
                    {answerText: 'null', isCorrect: false},
                ],
            },
            {
                questionText: 'The iPhone was created by which company?',
                answerOptions: [
                    {answerText: 'Apple', isCorrect: true},
                    {answerText: 'Intel', isCorrect: false},
                    {answerText: 'Amazon', isCorrect: false},
                    {answerText: 'Microsoft', isCorrect: false},
                ],
            },
            {
                questionText: 'How many Harry Potter books are there?',
                answerOptions: [
                    {answerText: '1', isCorrect: false},
                    {answerText: '4', isCorrect: false},
                    {answerText: '6', isCorrect: false},
                    {answerText: '7', isCorrect: true},
                ],
            },
        ];
        return (
            <>
                <div className="programming-task">
                    <Header/>
                    <div className='app'>
                        {false ? (
                            <div className='score-section'>
                                You scored 1 out of {questions.length}
                            </div>
                        ) : (
                            <>
                                <div className='question-section'>
                                    <div className='question-count'>
                                        <span>Question 1</span>/{questions.length}
                                    </div>
                                    <div className='question-text'>{questions[1].questionText}</div>
                                </div>
                                <div className='answer-section'>
                                    {questions[1].answerOptions.map((answerOption) => (
                                        <button

                                            onClick={() => this.handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </>
        );
    }
}
