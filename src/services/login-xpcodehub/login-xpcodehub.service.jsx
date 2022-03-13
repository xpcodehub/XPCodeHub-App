import {BaseService, ToastService} from "..";

export class LoginXPCodeHub extends BaseService {
    constructor() {
        super(`${process.env.REACT_APP_API_URL}`)

        this.toast = new ToastService()
    }

    login = async (login) => {
        console.log("chegou aqui????? SIM, MAS FALTA TRATAR EM CASO DE ERRO") //TODO
        await super.post(`/login`, login,{
            authorized: false
        }).then((value) =>{
            console.log("Login feito com Sucesso!")
            this.toast.sucesso("Login feito com Sucesso!")
            localStorage.setItem("token-xpcodehub-login", value.accessToken)
        }).catch((erro) => {
            console.log(`Erro ao logar: ${erro.response.data.message}`)
            this.toast.erro(`Erro ao logar: ${erro.response.data.message}`)
        })
    }
}
