import {BaseService} from "..";


export class SkillTreeService extends BaseService {
    constructor() {
        super(`${process.env.REACT_APP_API_URL}`)

    }

    getSkillTreeList = async () => {
        console.log("iuhuu, cheguei aqui")
        let requisicaoTeste = await super.get(`/skill-tree`, {
            authorized: true
        });
        console.log("bati no back")
        console.log(requisicaoTeste)
        return requisicaoTeste
    }
}
