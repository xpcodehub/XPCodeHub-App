import {BaseService, ToastService} from "..";

export class LoginXPCodeHub extends BaseService {
    constructor() {
        super(`${process.env.REACT_APP_API_URL}`)

        this.toast = new ToastService()
    }

    login = async (login) => {
        await super.post(`/login`, login,{
            authorized: false
        }).then(async (value) =>{
            this.toast.sucesso("Login feito com Sucesso!")
            localStorage.setItem("token-xpcodehub-login", value)
        }).catch((erro) => {
            this.toast.erro(`Erro ao logar: ${erro.response.data.message}`)
        })
    }
}
