import React, {Component} from "react";
import {Header} from "../../components";
import './tech-steps.style.css'
import 'react-modal-video/css/modal-video.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle, faClone, faCode, faPen, faPlayCircle, faSpinner} from '@fortawesome/free-solid-svg-icons'
import ModalVideo from 'react-modal-video'
import {TechHeaderSection} from "./sections/tech-header/tech-header.section";
import {TechStepsService, ToastService} from "../../services";
import Modal from 'react-bootstrap/Modal'
import {Gif} from '@giphy/react-components'
import {GiphyFetch} from '@giphy/js-fetch-api'
import {Redirect} from "react-router-dom";


export class TechStepsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVideoAulaId: false,
            techSteps: {techConceptList:[]},
            renderCodingTaskModal: false,
            gif: false,
            redireciona: false
        }

        this.techStepsService = new TechStepsService();
        this.toast = new ToastService();
        console.log(this.props)
        this.getTechSteps(this.props.match.params.idName);
        this.getGif()
    }

    getRandomNumberWithHigherProbabilityForLowestNumbers = (max) => {
        return Math.floor(Math.pow(Math.random(), 2) * max);
    }

    getGif = async () => {
        const gif = await new GiphyFetch('MCUPVryg2ydH59s7daR3AgbYAOKczUSN').search('computer', //TODO add in a local secret and create production SDK
            {type: 'gifs', limit: 1, rating: 'g', offset: this.getRandomNumberWithHigherProbabilityForLowestNumbers(100)})
        console.log(gif)
        this.setState({
            gif: gif.data[0]
        })
    }

    renderModalVideoAula = (youtubeId) => {
        console.log(youtubeId)
        this.setState({
            modalVideoAulaId: youtubeId
        })
    }

    getTechSteps = async (idName) => {
        const techSteps = await this.techStepsService.getTechSteps(idName);
        this.setState({
            techSteps: techSteps
        })
    }

    setRenderCodingTaskModal = (codingTaskRepository) => {
        console.log("tão me chamandoo")
        this.setState({
            renderCodingTaskModal: codingTaskRepository
        })
    }

    redirectToProgrammingQuestions = (idProgrammingQuestion) => {
        this.setState({
            redireciona: `/tech-steps/${this.props.match.params.idName}/programming-questions/${idProgrammingQuestion}`
        })
    }

    getTechConceptIcons = (techConcept) => {
        techConcept.show = true;
        console.log(techConcept.techConceptStudent.status)
        console.log(techConcept.techConceptStudent.status === "PROCESSING" )
        switch (techConcept.type) {
            case "VIDEO_LEARNING":
                return <>
                    <FontAwesomeIcon icon={faPlayCircle} className="icon-play-clickable" size="2x"
                                     onClick={() => this.renderModalVideoAula(techConcept.youtubeId)}/>
                    <FontAwesomeIcon icon={faCheckCircle}
                                     className={`icon-check-clickable icon-check-${techConcept.techConceptStudent.status}`}
                                     size="2x"
                                     onClick={() => this.techStepsService.updateTechConceptStatus(techConcept.techConceptStudent.id, techConcept.techConceptStudent.status === "SUCCESS" ? "NOT_STARTED" : "SUCCESS", () => this.getTechSteps(this.props.match.params.idName))}/>
                </>
            case "PROGRAMING_QUESTION":
                return <>
                    <FontAwesomeIcon icon={faPen} className="icon-quiz-clickable"
                                     size="2x" onClick={() => this.redirectToProgrammingQuestions(techConcept.id)}/>
                    <FontAwesomeIcon icon={faCheckCircle} className={`icon-check icon-check-${techConcept.techConceptStudent.status}`} size="2x"/>
                </>
            case "CODING_TASK":
                return <>
                    <FontAwesomeIcon icon={faCode} className="icon-code-clickable"
                                     onClick={() => this.setRenderCodingTaskModal(techConcept)} size="2x"/>
                    <FontAwesomeIcon icon={techConcept.techConceptStudent.status === "PROCESSING" ? faSpinner : faCheckCircle} className={`icon-check icon-check-${techConcept.techConceptStudent.status}`} size="2x"/>
                </>
            default:
                return <></>
        }
    }



    CodingTaskVerticallyCenteredModal(props) {
        const gitClone = `git clone ${props.codingTaskModal.githubRepository}`
        return (
            <Modal
                show={props.codingTaskModal.show}
                onHide={props.onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className="coding-task-modal">
                        {props.codingTaskModal.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="coding-task-modal-centralize">
                    <p className="coding-task-modal">
                        It's hands-on time, let's code! Clone the repository below and do the exercises as explained in
                        the Git module. Enjoy the coding 🤖😁‍!
                    </p>
                    <br/>
                    <div className="coding-task-modal-code-centralize">
                        <code className="coding-task-modal-code-tag">
                            {gitClone}
                        </code>
                        <FontAwesomeIcon icon={faClone} className="icon-clone" size="lg"
                                         onClick={() => navigator.clipboard.writeText(gitClone)
                                             .then(() => props.toast.info("Git clone copied."))}/>
                    </div>
                </Modal.Body>
                <Modal.Footer className="coding-task-modal-code-centralize">
                    {props.gif ? <Gif gif={props.gif} height={300}  width={500}/> : null}
                    <small className="coding-task-modal"> PS: This is a <b>random gif</b> about computing</small>
                </Modal.Footer>
            </Modal>
        );
    }

    render() {
        if (this.state.redireciona) {
            return <Redirect to={this.state.redireciona}/>
        }

        return (
            <>
                <ModalVideo channel='youtube' isOpen={this.state.modalVideoAulaId} videoId={this.state.modalVideoAulaId}
                            onClose={() => this.setState({modalVideoAulaId: false})}/>

                <this.CodingTaskVerticallyCenteredModal
                    codingTaskModal={this.state.renderCodingTaskModal}
                    onHide={() => this.setRenderCodingTaskModal(false)}
                    toast={this.toast}
                    gif={this.state.gif}
                />

                <div className="tech-steps">
                    <Header/>
                    <TechHeaderSection techSteps={this.state.techSteps}/>

                    <div className="tech-body">
                        <div className="tech-concepts">
                            {this.state.techSteps.techConceptList.map((techConcept) => {
                                return <>
                                    <div className="specific-concept">
                                        <h3>{techConcept.name}</h3>
                                        <div className="icons-specific-concept">
                                            {this.getTechConceptIcons(techConcept)}
                                        </div>
                                    </div>
                                </>
                            })}
                        </div>
                    </div>

                    <div className="tech-page-circle-2"/>
                    <div className="tech-page-circle-3"/>
                    <div className="tech-page-circle-1"/>
                </div>
            </>
        );
    }
}
