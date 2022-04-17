// import { Button } from "bootstrap";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase.init";
import Loading from "../Loading/Loading";
import SocialComponent from "../SocialComponent/SocialComponent";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validated, setValidated] = useState(false);
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] =
        useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let errorInfo;
    if (error || resetError) {
        errorInfo = <p className="text-danger">Error: {error?.message}</p>;
    }
    if (loading || sending) {
        return <Loading></Loading>;
    }
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        signInWithEmailAndPassword(email, password);
        setValidated(true);
    };
    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Sent email");
        } else {
            toast("Please Enter your email.");
        }
    };
    return (
        <div className="container d-block mx-auto text-start py-5">
            <h2 className="mb-3 text-center login-title">LOGIN</h2>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <Form
                        className="w-100"
                        noValidate
                        validated={validated}
                        onSubmit={handleLogin}
                    >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                onBlur={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Enter email"
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                onBlur={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        {errorInfo}

                        <Button
                            className="w-100"
                            variant="primary"
                            type="submit"
                        >
                            Login
                        </Button>
                    </Form>
                    <p className="my-3">
                        New to Elite Physiotherapy Center?{" "}
                        <Link className="text-decoration-none" to="/signup">
                            Create New Account
                        </Link>
                    </p>
                    <p>
                        Forget Password?{" "}
                        <button
                            onClick={resetPassword}
                            className="btn btn-link reset-btn"
                        >
                            Reset Password
                        </button>
                    </p>
                    <SocialComponent></SocialComponent>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Login;
