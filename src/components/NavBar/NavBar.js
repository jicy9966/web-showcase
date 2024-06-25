import React, { useRef } from "react";
import "./NavBar.scss"
import { ksea_logo } from "../../utils/images"
import { Link } from "react-router-dom"

const NavBar = () =>
{    
    return (
        <div className="app-topbar">
            <div className="app-navbar">
                <nav className="navbar-content">
                    <ul className="links">
                        <li className="link-item">
                            <a href="/#about">About</a>
                        </li>
                        <li className="link-item">
                            <Link to="/activity">Activity</Link>
                        </li>
                        <li className="link-item">
                            <Link to="/events">Upcoming Events</Link>
                        </li>
                        <li className="link-item">
                            <Link to="/members">Members</Link>
                        </li>
                        <li className="text-center">
                            <div className="link-button margin-left bg-clr-bluey">
                                <Link to="/" className="fs-20">Login</Link>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
            <Link to="/" className="app-logo flex align-center justify-center">
                <img src={ksea_logo} alt=" " />
                <text className="app-title flex justify-center">KSEA UCI</text>
            </Link>
        </div>
    )
}

export default NavBar