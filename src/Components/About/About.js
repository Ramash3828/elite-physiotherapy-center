import React from "react";
import "./About.css";
import profilePic from "../../images/ramash.jpg";

const About = () => {
    return (
        <div className="aboutArea">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <img
                            className="img-fluid rounded-circle"
                            src={profilePic}
                            alt=""
                        />
                    </div>
                </div>
                <div className="row g-5 my-5">
                    <div className="col-md-6">
                        <div className="skill text-start">
                            <h4>My Skill:</h4>
                            <ul>
                                <li>HTML5</li>
                                <li>
                                    CSS (<strong>Framework:</strong> Bootstrap
                                    5, Tailwind CSS)
                                </li>
                                <li>JavaScript</li>
                                <li>React JS (Library)</li>
                            </ul>
                            <h4>Contact Me:</h4>
                            <p>ramash3828@gmail.com</p>
                            <p>Facebook: Ramash Halder</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="aboutMe text-start">
                            <h4>My Explanation</h4>
                            <p>
                                I am a student of Programming Hero Batch 5 in
                                course of Web Development. I want learn font end
                                and Back end development. I always try to follow
                                all the rules and regulations of the
                                programming-hero and follow the instructions of
                                the officials of the organization and work hard
                                enough to learn something good for me which
                                helps me to build a better future.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
