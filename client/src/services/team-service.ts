import {HttpService} from "./http-service.ts";
import {Team} from "../../models/team.ts";

export class TeamService {
    private http = new HttpService();

    createTeam = (team: Team) => this.http.post('teams', team)

    getTeams = () => this.http.get('teams');
}