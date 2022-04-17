import React from "react";
import "./SocialComponent.css";
import googleImg from "../../images/google.png";
import githubImg from "../../images/github.png";

const SocialComponent = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <div className="line"></div>
                <p className="m-0 px-3">OR</p>
                <div className="line"></div>
            </div>
            <button className="btn w-100 my-3">
                <img width={40} src={googleImg} alt="" />
                {"  "}
                Login with Google
            </button>
            <button className="btn w-100 mb-3">
                <img width={40} src={githubImg} alt="" />
                {"  "}
                Login with Github
            </button>
        </>
    );
};

export default SocialComponent;
