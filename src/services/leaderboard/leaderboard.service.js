import {BaseService} from "..";

export class LeaderboardService extends BaseService {
    constructor() {
        super(`${process.env.REACT_APP_API_URL}`)
    }
    getLeaderboard = async () => {
        return super.get(`/leaderboard`, {
            authorized: true
        })
    }
}