import React from 'react';
import { Link} from "react-router-dom"
import "../css_comps/missions.css"
function Nav(props) {
    return (
        <nav className="container bg-secondary text-dark d-flex align-items-center">
            <div className="row">
                <Link to={"/"} className="text-decoration-none">Mission List</Link>
                <Link to={"/add-mission/"} className="text-decoration-none">Create Mission</Link>
                <Link to={"/add-channel/"} className="text-decoration-none">Create Channel</Link>
                </div>
        </nav>
    )
}

export default Nav