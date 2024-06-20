import React from "react";
import "./IndexPage.scss"
import { presenter } from "../../utils/images";

const IndexPage = () =>
{
    return(
        <div className="index-container">
            <div className="title-container">
                <text className="title">KSEA UC IRVINE</text>
                <div className="divider"></div>
                <text className="description">
                    Promoting career development, networking, and service for Korean-American scientists & engineers in UCI
                </text>
            </div>
            <ul className="buttons">
                <a href="https://www.ksea.org/" target="blank">
                    <li className="button bt-clr-yellow fw-7">
                        <text>Learn more</text>
                    </li>
                </a>
                <a href="" target="blank">
                    <li className="button bt-clr-white fw-7">
                        <text>Join us today</text>
                    </li>
                </a>
            </ul>
        </div>
    )
}

export default IndexPage