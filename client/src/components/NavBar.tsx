import {NavLink} from "react-router-dom";

export default function NavBar() {
    return (
        <div className="flex items-center bg-black">
            <NavLink to={'/'}>
                <h1 className="text-2xl text-white p-2">Major Wager Golf</h1>
            </NavLink>
        </div>
    )
}