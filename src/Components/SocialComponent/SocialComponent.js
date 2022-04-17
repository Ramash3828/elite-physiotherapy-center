import React from "react";
import "./SocialComponent.css";
import googleImg from "../../images/google.png";
import githubImg from "../../images/github.png";
import auth from "../../Firebase.init";
import {
    useSignInWithGithub,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const SocialComponent = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] =
        useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] =
        useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let errorInfo;
    if (googleError || githubError) {
        errorInfo = (
            <p className="text-danger">
                Error: {googleError?.message} {githubError?.message}
            </p>
        );
    }
    if (googleLoading || githubLoading) {
        return <Loading></Loading>;
    }
    let from = location.state?.from?.pathname || "/";
    if (googleUser || githubUser) {
        navigate(from, { replace: true });
    }
    return (
        <>
            {errorInfo}
            <div className="d-flex justify-content-center align-items-center">
                <div className="line"></div>
                <p className="m-0 px-3">OR</p>
                <div className="line"></div>
            </div>
            <button
                onClick={() => signInWithGoogle()}
                className="btn w-100 my-3"
            >
                <img width={40} src={googleImg} alt="" />
                {"  "}
                Login with Google
            </button>

            <button
                onClick={() => signInWithGithub()}
                className="btn w-100 mb-3"
            >
                <img width={40} src={githubImg} alt="" />
                {"  "}
                Login with Github
            </button>
        </>
    );
};

export default SocialComponent;
