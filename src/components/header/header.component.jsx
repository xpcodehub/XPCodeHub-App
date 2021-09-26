import React, {Component} from 'react'
import "./header.style.css"
import logo from "./img/ICON_CODEHUB-removebg.png"
import iconUserDefault from "./img/user-default-image.png"
import {Redirect} from "react-router-dom"
import {UrlFinder, UserService} from "../../services";


export class Header extends Component {
    constructor(props) {

        super(props)

        this.state = {
            redireciona: false,
            fotoUsuario: iconUserDefault
        }

        this.urlFinder = new UrlFinder()
        this.userService = new UserService()
    }

    componentDidMount() {
        this.getAvatar()
    }

    redirecionarParaHome = () => {
            this.setState({
                redireciona: this.urlFinder.getUrlHome()
            })
    }

    getAvatar = async () => {
        const email = await this.userService.getEmail()
        if (email) {
            // const fotoUsuario = this.gestaoStaffService.getFotoGravatar(email) TODO
            const fotoUsuario = "https://picsum.photos/200/200.jpg"

            this.setState({
                fotoUsuario: fotoUsuario
            })
        }
    }

    render() {
        if (this.state.redireciona) {
            return <Redirect to={`../../../../../../../${this.state.redireciona}`}/>
        }

        return (
            <>
                <div className="header">
                    <img width="100px" height="100px" src={logo} onClick={this.redirecionarParaHome}
                         alt="logo"/>
                    {this.urlFinder.getLastElement().toLowerCase() === "login" ? <span/> :
                        <span/> // TODO CRIAR COMPONENT DA PARTE DA FOTO, PONTOS E MSG
                    }
                </div>
            </>
        )
    }
}
