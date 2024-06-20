import React from "react";
import "./Footer.scss"
import { ksea_logo, uci_logo, instagram_logo, linktree_logo } from "../../utils/images";

const Footer = () =>
{
    return(
        <div className="app-footer">
            <div className="flex">
                <img className="ksea-logo" src={ksea_logo} alt=" " />
                <img className="uci_logo" src={uci_logo} alt=" " />
                <div className="footer-text">
                    <text>
                        Information about KSEA.
                    </text>
                    <text>
                        Information about us, KSEA UCI.
                    </text>
                    <text>
                        University of California, Irvine. 
                    </text>
                </div>
                <div className="followus">
                    <text>Follow us!</text>
                    <div className="small-divider my-2"></div>
                    <div className="icon-text">
                        <img className="insta-logo" src={instagram_logo}></img>
                        <a href="https://www.instagram.com/kseaucirvine/" target="blank">
                            <text>kseaucirvine_instagram</text>
                        </a>
                    </div>
                    <div className="icon-text">
                        <img className="linktree-logo" src={linktree_logo}></img>
                        <a href="https://linktr.ee/kseaucirvine" target="blank">
                            <text>kseaucirvine_linktree</text>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer