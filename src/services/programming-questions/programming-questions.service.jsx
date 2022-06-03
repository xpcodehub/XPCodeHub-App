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

    correctAllProgrammingQuestions = async (programmingQuestionsId, answersIdChosenByStudent) => {
        return super.post(`/programming-questions/${programmingQuestionsId}/correct`,
            {questionIdAnswerIdMap: Object.fromEntries(answersIdChosenByStudent)}, {authorized: true})
    }

    correctProgrammingQuestion = async (answersIdChosenByStudent) => {
        return super.post(`/programming-question/correct`,
            {answerId: answersIdChosenByStudent}, {authorized: true})
    }
}
