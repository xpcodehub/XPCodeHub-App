import {BaseService} from "..";


export class SkillTreeService extends BaseService {
    constructor() {
        super(`${process.env.REACT_APP_API_URL}`)

    }

    getSkillTreeList = async () => {
        return super.get(`/skill-tree`, {
            authorized: true
        })
    }
}
