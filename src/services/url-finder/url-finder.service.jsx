import {BaseService} from "..";

export class UrlFinder extends BaseService {
    constructor() {
        super(`${process.env.REACT_APP_API_URL}`)
    }

    getUrlLogin = () => {
        return "/login"
    }

    getUrlHome = () => {
        return "/"
    }

    getLastElement = () => {
        let lastElement = window.location.href.split("/")
        return lastElement[lastElement.length - 1];
    }

    getUrlLogout = () => {
        return "/logout"
    }

    getUrlProgrammingTask = () => {
        return "/programming-questions/:programmingQuestionsId";
    }

    getUrlTechSteps = () => {
        return "/tech-steps/:idName";
    }
}
