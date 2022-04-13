import React, {Component} from "react";
import {Header} from "../../components";
import './tech-steps.style.css'
import 'react-modal-video/css/modal-video.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlayCircle, faCheck, faCode, faPen, faClone} from '@fortawesome/free-solid-svg-icons'
import ModalVideo from 'react-modal-video'
import {TechHeaderSection} from "./sections/tech-header/tech-header.section";
import {TechStepsService, ToastService} from "../../services";
import Modal from 'react-bootstrap/Modal'


export class TechStepsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVideoAulaId: false,
            techConceptList: [],
            renderCodingTaskModal: false
        }

        this.techStepsService = new TechStepsService();
        this.toast = new ToastService();
        console.log(this.props)
        this.getTechSteps(this.props.match.params.idName);
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
            techConceptList: techSteps.techConceptList
        })
    }

    setRenderCodingTaskModal = (codingTaskRepository) => {
        console.log("tão me chamandoo")
        this.setState({
            renderCodingTaskModal: codingTaskRepository
        })
    }

    getTechConceptIcons = (techConcept) => {
        techConcept.show = true;
        switch (techConcept.type) {
            case "VIDEO_LEARNING":
                return <>
                    <FontAwesomeIcon icon={faPlayCircle} className="icon-play-clickable" size="2x"
                                     onClick={() => this.renderModalVideoAula(techConcept.youtubeId)}/>
                    <FontAwesomeIcon icon={faCheck} className="icon-check-clickable" size="2x"/>
                </>
            case "PROGRAMING_QUESTION":
                return <>
                    <FontAwesomeIcon icon={faPen} className="icon-quiz-clickable"
                                     size="2x"/>{/*TODO Redirecionar para exercicio de pergunta*/}
                    <FontAwesomeIcon icon={faCheck} className="icon-check" size="2x"/>
                </>
            case "CODING_TASK":
                return <>
                    <FontAwesomeIcon icon={faCode} className="icon-code-clickable"
                                     onClick={() => this.setRenderCodingTaskModal(techConcept)}
                                     size="2x"/> {/*TODO Abrir modal com explicação de como fazer e qual projeto clonar para fazer os exercícios de codificação*/}
                    <FontAwesomeIcon icon={faCheck} className="icon-check" size="2x"/>
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
                        It's hands-on time, let's code! Clone the repository below and do the exercises as explained in the Git module. Enjoy the coding 🤖😁‍!
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
                <Modal.Footer>
                    {/*<Button onClick={props.onHide}>Close</Button>*/}
                </Modal.Footer>
            </Modal>
        );
    }

    render() {
        return (
            <>
                <ModalVideo channel='youtube' isOpen={this.state.modalVideoAulaId} videoId={this.state.modalVideoAulaId}
                            onClose={() => this.setState({modalVideoAulaId: false})}/>

                <this.CodingTaskVerticallyCenteredModal
                    codingTaskModal={this.state.renderCodingTaskModal}
                    onHide={() => this.setRenderCodingTaskModal(false)}
                    toast={this.toast}/>

                <div className="tech-steps">
                    <Header/>
                    <TechHeaderSection/>

                    <div className="tech-body">
                        <div className="tech-concepts">
                            {this.state.techConceptList.map((techConcept) => {
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
