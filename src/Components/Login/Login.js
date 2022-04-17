// import { Button } from "bootstrap";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase.init";
import Loading from "../Loading/Loading";
import SocialComponent from "../SocialComponent/SocialComponent";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validated, setValidated] = useState(false);
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    let errorInfo;
    if (error) {
        errorInfo = <p className="text-danger">Error: {error?.message}</p>;
    }
    if (loading) {
        return <Loading></Loading>;
    }
    if (user) {
        navigate("/home");
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
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                        >
                            <Form.Check
                                type="checkbox"
                                label="Terms adn Conditions."
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                        <p className="my-3">
                            New to Elite Physiotherapy Center?{" "}
                            <Link className="text-decoration-none" to="/signup">
                                Create New Account
                            </Link>
                        </p>
                    </Form>
                    <SocialComponent></SocialComponent>
                </div>
            </div>
        </div>
    );
};

export default Login;
