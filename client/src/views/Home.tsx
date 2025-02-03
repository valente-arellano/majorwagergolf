import {useNavigate} from "react-router-dom";
import { Button } from '@mantine/core';

const Home = () => {
    const nav = useNavigate();
    const onEnterDraftClick = () => {
        nav('/team/create');
    }
    return (
        <>
            <h2>this is the homepage</h2>
            <Button onClick={onEnterDraftClick}>Enter draft</Button>
        </>
    )
}
export default Home;