import React, {Component} from 'react'
import './tech-header.style.css'
import ProgressBar from "@ramonak/react-progress-bar";

export class TechHeaderSection extends Component {

    render() {
        return (
            <>
                <div className="formacao-header formacao__background-color--front-end">
                    <div className="container-tech-steps">
                        <div className="formacao-header-headline">
                            <h1 className="formacao-headline-titulo">HTML e CSS</h1>
                            <h2 className="formacao-headline-subtitulo">Crie páginas incríveis com as tecnologias da
                                Web</h2>
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
                                    <span className="formacao-finalizado-fracao__completed">1</span>/17
                                </span>
                                    <span className="formacao-finalizado-label">Cursos finalizados</span>
                                </div>
                            </div>

                            <div className="formacao_user-follow-certificate">
                                <ProgressBar completed={60}
                                             customLabel="You must pick a real Message and values from back."
                                             bgColor={"rgb(28,113,219)"}/>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}
