import React from "react";
import { Outlet } from "react-router-dom";
import "./HomePage.scss"
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"

const HomePage = () =>
{
    return(
        <div className="page">
            <NavBar />
            <div className="container">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default HomePage