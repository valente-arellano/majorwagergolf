import './App.css'
import NavBar from "./components/NavBar.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./views/Home.tsx";
import TeamCreator from "./views/TeamCreator.tsx";
import {Container, MantineProvider} from '@mantine/core';
import {Notifications} from "@mantine/notifications";
import TeamList from "./views/TeamList.tsx";

const App = () => {
    return (
        <MantineProvider>
            <Notifications />
            <header>
                <NavBar/>
            </header>
            <Container className="mt-2">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/team/create" element={<TeamCreator />} />
                    <Route path="/team/list" element={<TeamList />} />
                </Routes>
            </Container>
        </MantineProvider>
    )
}
export default App;
