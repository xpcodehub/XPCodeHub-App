import {BaseService} from "..";


export class ProgrammingQuestionsService extends BaseService {
    constructor() {
        super(`${process.env.REACT_APP_API_URL}`)

    }

    getProgrammigQuestions = async (programmingQuestionId) => {
        return super.get(`/programming-questions/${programmingQuestionId}`, {
            authorized: true
        })
    }

    correctProgrammingQuestions = async (programmingQuestionsId, answersIdChosenByStudent) => {
        console.log(JSON.stringify({questionIdAnswerIdMap: Object.fromEntries(answersIdChosenByStudent)}))

        return super.post(`/programming-questions/${programmingQuestionsId}/correct`,
            {questionIdAnswerIdMap: Object.fromEntries(answersIdChosenByStudent)}, {authorized: true})
    }
}
