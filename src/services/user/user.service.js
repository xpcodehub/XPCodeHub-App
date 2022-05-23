import {BaseService} from "..";

export class UserService extends BaseService {
    constructor() {
        super(`${process.env.REACT_APP_API_URL}`)
    }

    // getEmail = async () => {
    //     if(localStorage.getItem('token-xpcodehub-login') !== null) {
    //         return super.get(`c-monkey/funcionarios/funcionarioLogado`, {
    //             authorized: true
    //         }).catch(error => {
    //             if (error.toString().includes("401")) {
    //                 localStorage.clear()
    //             }
    //         })
    //     } else {
    //         return false
    //     }
    // }

    getStudentInfo = async () => {
        return super.get(`/student`, {
            authorized: true
        })
    }
}