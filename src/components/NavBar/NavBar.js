import React from "react";
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
                            <Link to="/about">
                                <text>About</text>
                            </Link>
                        </li>
                        <li className="link-item">
                            <Link to="/activity">
                                <text>Activity</text>
                            </Link>
                        </li>
                        <li className="link-item">
                            <Link to="/events">
                                <text>Upcoming Events</text>
                            </Link>
                        </li>
                        <li className="link-item">
                            <Link to="/members">
                                <text>Members</text>
                            </Link>
                        </li>
                        <li className="text-center">
                            <div className="link-button margin-left bg-clr-bluey">
                                <Link to="/">
                                    <text className="fs-20">Login</text>
                                </Link>
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