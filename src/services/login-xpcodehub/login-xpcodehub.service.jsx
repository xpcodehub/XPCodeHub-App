import {BaseService, ToastService} from "..";

export class LoginXPCodeHub extends BaseService {
    constructor() {
        super(`${process.env.REACT_APP_API_URL}`)

        this.toast = new ToastService()
    }

    login = async (login) => {
        await super.post(`/login`, login,{
            authorized: false
        }).then((value) =>{
            localStorage.setItem("token-xpcodehub-login", value.accessToken)
        }).catch((erro) => {
            this.toast.erro(`Erro ao logar: ${erro.message}`)
        })
    }
}
