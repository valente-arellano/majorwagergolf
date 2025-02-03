import {useEffect, useState} from "react";
import {TeamService} from "../services/team-service.ts";
import {Team} from "../../models/team.ts";
import {Table} from "@mantine/core";

const TeamList = () => {
    const [teamList, setTeamList] = useState<Team[]>([]);
    const rows = teamList.map((team: Team) =>
        (
            <Table.Tr key={team.managerName}>
                <Table.Td>{team.managerName}</Table.Td>
                <Table.Td>{team.teamName}</Table.Td>
            </Table.Tr>
        )
    )
    useEffect(() => {
        const teamService: TeamService = new TeamService();
        const {request} = teamService.getTeams()

        request.then((response) => {
            setTeamList(response.data)
        })
    })
    return (
        <>
            <h2 className="font-bold font-3xl">Team Creator</h2>
            <Table>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Team Name</Table.Th>
                        <Table.Th>Team Manager</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </>
    )
}
export default TeamList;