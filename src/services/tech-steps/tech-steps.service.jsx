import {BaseService} from "..";


export class TechStepsService extends BaseService {
    constructor() {
        super(`${process.env.REACT_APP_API_URL}`)
    }

    getTechSteps = async (idName) => {
        return await super.get(`/tech-steps/${idName}`, {
            authorized: true
        })
    }

    // @param callback Default value is a noop fn
    updateTechConceptStatus = async (techConceptStudentId, status, callback = () => {}) => {
        return super.put(`/tech-concept/${techConceptStudentId}/status/${status}`, null, {
            authorized: true
        }).then(callback)
    }
}
