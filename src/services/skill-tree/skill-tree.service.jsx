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

    getSkillTreeSavedData = async () => {
        return super.get(`/skill-tree-saved-data`, {
            authorized: true
        })
    }

    getUserInfo = async () => {
        return super.get(`/student`, {
            authorized: true
        })
    }
}
