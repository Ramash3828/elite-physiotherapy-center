import React from "react";
import "./About.css";
import profilePic from "../../images/ramash.jpg";

const About = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-4 offset-4">
                    <img
                        className="img-fluid rounded-full"
                        src={profilePic}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
