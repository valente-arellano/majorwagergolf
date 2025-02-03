import {Button, TextInput} from "@mantine/core";
import {useForm} from "@mantine/form";
import {TeamService} from "../services/team-service.ts";
import {Team} from "../../models/team.ts";
import {notifications} from "@mantine/notifications";
import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const TeamCreator = () => {
    const navigate = useNavigate();
    const [formDisabled, setFormDisabled] = useState<boolean>(false);

    const form = useForm<Team>({
        mode: 'uncontrolled',
        initialValues: {
            managerName: '',
            teamName: '',
        },
        validate: {
            managerName: (value: string) => (value.length <= 0 ? 'Manager name is required' : null),
            teamName: (value: string) => (value.length <= 0 ? 'Manager name is required' : null),
        }
    });

    const handleSubmit = (team: Team) => {
        setFormDisabled(true);

        const teamService = new TeamService();
        const {request} = teamService.createTeam(team)

        request.then(response => {
            if (response.status === 200) {
                notifications.show({
                    title: 'Success!',
                    message: `Team ${team.teamName} created successfully.`,
                    color: 'green'
                })

                navigate('/team/list')
            } else {
                notifications.show({
                        title: 'Error',
                        message: `Team ${team.teamName} not created. Please try again.`,
                        color: 'red'
                    }
                )
            }
        }).catch(error => {
            if (axios.isCancel(error)) {
                console.log("Request canceled:", error.message);
            }
            notifications.show({
                    title: 'Error',
                    message: `Team ${team.teamName} not created. Please try again.`,
                    color: 'red'
                }
            )
        }).finally(() => {
            setFormDisabled(false);
        })
    }

    return (
        <>
            <h2 className="font-bold font-3xl">Team Creator</h2>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <fieldset disabled={formDisabled}>
                    <TextInput
                        withAsterisk
                        label="Team manager"
                        placeholder="Enter your name"
                        key={form.key('managerName')}
                        {...form.getInputProps('managerName')}
                    />
                    <TextInput
                        withAsterisk
                        label="Team name"
                        placeholder="Enter your team's name"
                        key={form.key('teamName')}
                        {...form.getInputProps('teamName')}
                    />
                    <Button className="mt-2" type="submit">Next</Button>
                </fieldset>
            </form>
        </>
    )
}

export default TeamCreator