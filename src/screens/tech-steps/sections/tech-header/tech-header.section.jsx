import React, {Component} from 'react'
import './tech-header.style.css'
import ProgressBar from "@ramonak/react-progress-bar";

export class TechHeaderSection extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log("lol")
        console.log(this.props.techSteps)
        return (
            <>
                <div className="formacao-header formacao__background-color--front-end">
                    <div className="container-tech-steps">
                        <div className="formacao-header-headline">
                            <h1 className="formacao-headline-titulo">{this.props.techSteps.name}</h1>
                            <h2 className="formacao-headline-subtitulo">{this.props.techSteps.description}</h2>
                        </div>
                        <div className="formacao-header-icon--degree"/>
                    </div>

                    <div className="formacao-dados container-tech-steps">
                        <div className="formacao-header-dados">
                            <div
                                className="formacao-dados-finalizado formacao__text-color--front-end formacao__after-aux-border-color--front-end">
                                <div className="formacao-finalizado-cursos">
                                    <div className="guide-card__progress-bar guide-card__progress-bar__formacao">
                                    </div>
                                </div>

                                <div className="formacao-finalizado-texto">
                                <span className="formacao-finalizado-fracao">
                                    <span className="formacao-finalizado-fracao__completed">
                                        {this.props.techSteps.progress ? this.props.techSteps.progress.finished : 0}</span>/{this.props.techSteps.progress ? this.props.techSteps.progress.size : 0}
                                </span>
                                    <span className="formacao-finalizado-label">Cursos finalizados</span>
                                </div>
                            </div>

                            <div className="formacao_user-follow-certificate">
                                <ProgressBar completed={this.props.techSteps.progress ? ((this.props.techSteps.progress.finished/this.props.techSteps.progress.size) * 100) : 0}
                                             customLabel={this.props.techSteps.progress ? this.props.techSteps.progress.motivation : null} // TODO fazer no backend
                                             bgColor={"rgb(28,113,219)"}/>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}
