import React, {Component} from "react";
import "./login.style.css";
import {Header, LabelLogin} from "../../components";
import {LoginXPCodeHub, ToastService} from "../../services";
import {Redirect} from "react-router-dom"

export class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            email: '',
            password: '',
            redirect: false,
            botaoLogin: true
        }

        this.loginService = new LoginXPCodeHub()
        this.toast = new ToastService()
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    };

    logar = async () => {

        if (this.state.email === "") {
            this.toast.erro("Fill the Email field to login! ⚠")
            return;
        }
        if (this.state.password === "") {
            this.toast.erro("Fill the Password field to login! ⚠")
            return;
        }

        let stateAtual = this.state
        stateAtual.botaoLogin = false
        this.setState(stateAtual)

        await this.loginService.login({
            email: this.state.email,
            password: this.state.password
        }).then(() => {
            this.setState({
                redirect: "/"
            })
        })
    };

    pressionouEnter = event => {
        if (event.keyCode === 13) {
            this.logar()
        }
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }

        return (
            <>
                <div className="full-height-grow">
                    <Header/>
                    <div className="container-login full-height-grow">
                        <section className="join-main-section">
                            <h1 className="join-text">
                                Join the
                                <span className="accent-text"> fun.</span>
                            </h1>
                            <form className="join-form">
                                {/*<LabelLogin*/}
                                {/*    texto="User:"*/}
                                {/*    type="text"*/}
                                {/*    id="user"*/}
                                {/*    placeholder="xpcodehub"*/}
                                {/*    // classeIcone="fas fa-user"*/}
                                {/*    name="user"*/}
                                {/*    onChange={this.handleChange}*/}
                                {/*    value={this.state.user}*/}
                                {/*    pressionouEnter={this.pressionouEnter}*/}
                                {/*/>*/}
                                <LabelLogin
                                    texto="Email:"
                                    type="email"
                                    id="email"
                                    placeholder="xpcodehub@gmail.com"
                                    // classeIcone="fas fa-user"
                                    name="email"
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                    pressionouEnter={this.pressionouEnter}
                                />
                                <LabelLogin
                                    texto="Password:"
                                    type="password"
                                    id="password"
                                    placeholder="*********"
                                    // classeIcone="fas fa-user"
                                    name="password"
                                    onChange={this.handleChange}
                                    value={this.state.password}
                                    pressionouEnter={this.pressionouEnter}
                                />
                                <div className="input-group">
                                    <button type="button" className="btn" onClick={this.logar}>Join Now</button>
                                </div>
                            </form>
                        </section>
                    </div>

                    <div className="join-page-circle-1"/>
                    <div className="join-page-circle-2"/>
                </div>
            </>
    );
    }
    }
