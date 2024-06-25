import React from "react";
import "./IndexPage.scss";
import "./about.scss";
import "./organ.scss";
import { Link } from "react-router-dom"
import { FaCalendar } from "react-icons/fa";
import { BsHouseGearFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { AiFillTrophy } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";

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

            <span id="about" className="about-container">
                <div className="px-15 pt-5">
                    <text className="about-title">About KSEA</text>
                    <div className="about-div"></div>
                </div>
                <ul className="card-container">
                    <li className="about-card mx-5">
                        <span className="flexrow mx-5 mt-5 mb-4 fs-21 fw-7"> 
                            <text>What does </text>
                            <text className="text-bluey">KSEA </text>
                            <text>stand for?</text>
                        </span>
                        <li className="mx-6 fs-20 fw-4">
                            <li><text className="text-bluey fw-8">K</text><text>orean-American</text></li>
                            <li><text className="text-bluey fw-8">S</text><text>cientists and</text></li>
                            <li><text className="text-bluey fw-8">E</text><text>ngineers</text></li>
                            <li><text className="text-bluey fw-8">A</text><text>ssociation</text></li>
                        </li>
                        <div className="about-one mt-5">
                            <span className="korean-text">
                                <text className="text-gray">한국과 미국에 있는 과학자들 교류를 통해</text>
                                <text className="text-gray">다양한 연구를 촉진하고, 재미 한인 유학생들의 </text>
                                <text className="text-gray">커리어를 도우며, 연구개발을 통해 사회에</text>
                                <text className="text-gray">이바지 하는것을 목표로 하고 있습니다</text>
                            </span>
                        </div>
                    </li>
                    <li className="about-card mx-5">
                        <li className="fs-21 fw-7 px-5 mt-5 mb-5">
                            <text>Our Vision</text>
                        </li>
                        <li className="about-two grid">
                            <li className="flexrow align-center">
                                <text className="fs-20 fw-9">1</text>
                                <div className="point-divider mx-2"></div>
                                <text className="point-text">Promote the application of science and technology for the general welfare of society</text>
                            </li>
                            <li className="flexrow align-center">
                                <text className="fs-20 fw-9">2</text>
                                <div className="point-divider mx-2"></div>
                                <text className="point-text">Foster international cooperation especially between the U.S. and Korea</text>
                            </li>
                            <li className="flexrow align-center">
                                <text className="fs-20 fw-9">3</text>
                                <div className="point-divider mx-2"></div>
                                <text className="point-text">Help Korean-American Scientists and Engineers develop their full career potential</text>
                            </li>
                        </li>
                    </li>
                    <li className="about-card mx-5">
                        <li className="fs-21 fw-7 px-5 mt-5 mb-5">
                            <text>What we do</text>
                        </li>
                        <li className="icon-box flexrow justify-center align-center">
                            <FaCalendar className="icon" size={20}/>
                            <text className="text">STEM Events</text>
                        </li>
                        <li className="icon-box flexrow justify-center align-center">
                            <BsHouseGearFill className="icon" size={25}/>
                            <text className="text">Career Workshops</text>
                        </li>
                        <li className="icon-box flexrow justify-center align-center">
                            <IoIosPeople className="icon" size={27}/>
                            <text className="text">Social Networking</text>
                        </li>
                        <li className="icon-box flexrow justify-center align-center">
                            <AiFillTrophy className="icon" size={25}/>
                            <text className="text">Awards & Scholarships</text>
                        </li>
                        <Link to='/activity'>
                            <li className="more-info">
                                <text className="fw-6 px-4">More info</text>
                                <FaArrowRight className="icon" size={15}/>
                            </li>
                        </Link>
                    </li>
                </ul>
            </span>

            <div className="organ-container">
                <text>The KSEA Organization</text>
                <div></div>
                <ul className="text-list flex-column">
                    <text className="flexrow">{'>'} Established in 1971 as a non-profit organization</text>
                    <text className="flexrow">{'>'} Over 10,000 registered members</text>
                    <text className="flexrow">{'>'} 75+ Local Chapter & Branches</text>
                    <text className="flexrow">{'>'} 30 Affiliated Professional Societies</text>
                    <text className="flexrow">{'>'} 13 Technical Groups across the US</text>
                </ul>
                <div></div>
            </div>
        </div>
    )
}

export default IndexPage