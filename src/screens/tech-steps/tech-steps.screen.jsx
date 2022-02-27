import React, {Component} from "react";
import {Header} from "../../components";
import './tech-steps.style.css'
import 'react-modal-video/css/modal-video.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlayCircle, faCheck, faCode, faPen} from '@fortawesome/free-solid-svg-icons'
import ModalVideo from 'react-modal-video'
import {TechHeaderSection} from "./sections/tech-header/tech-header.section";


export class TechStepsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVideoAulaId: false
        }
    }

    renderModalVideoAula = () => {
        this.setState({
            modalVideoAulaId: "4dQtz1PpY9A"
        })
    }

    render() {
        return (
            <>
                <ModalVideo channel='youtube' isOpen={this.state.modalVideoAulaId} videoId={this.state.modalVideoAulaId}
                            onClose={() => this.setState({modalVideoAulaId: false})}/>
                <div className="tech-steps">
                    <Header/>
                    <TechHeaderSection/>

                    <div className="tech-body">
                        <div className="tech-concepts">
                            <div className="specific-concept">
                                <h3>Conceitos Html</h3>
                                <div className="icons-specific-concept">
                                    <FontAwesomeIcon icon={faPlayCircle} className="icon-play-clickable" size="2x"
                                                     onClick={this.renderModalVideoAula}/>
                                    <FontAwesomeIcon icon={faCheck} className="icon-check-clickable" size="2x"/>
                                </div>
                            </div>
                            <div className="specific-concept">
                                <h3>Quiz Html</h3>
                                <div className="icons-specific-concept">
                                    <FontAwesomeIcon icon={faCode} className="icon-code-clickable" size="2x"/>
                                    <FontAwesomeIcon icon={faPen} className="icon-check-clickable" size="2x"/>
                                </div>
                            </div>
                            <div className="specific-concept">
                                <h3>Let's code Html</h3>
                                <div className="icons-specific-concept">
                                    <FontAwesomeIcon icon={faCode} className="icon-code-clickable" size="2x"/>
                                    <FontAwesomeIcon icon={faCheck} className="icon-check-clickable" size="2x"/>
                                </div>
                            </div>
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
