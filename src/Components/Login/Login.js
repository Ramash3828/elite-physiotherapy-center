// import { Button } from "bootstrap";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialComponent from "../SocialComponent/SocialComponent";
import "./Login.css";

const Login = () => {
    const [validated, setValidated] = useState(false);
    const handleLogin = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

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
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicConPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm-Password"
                            />
                        </Form.Group>
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
