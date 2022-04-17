import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import SocialComponent from "../SocialComponent/SocialComponent";
import "./SignUp.css";

const SignUp = () => {
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
            <h2 className="mb-3 text-center login-title">SIGNUP</h2>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <Form
                        className="w-100"
                        noValidate
                        validated={validated}
                        onSubmit={handleLogin}
                    >
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
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
                            controlId="formBasicCheckbox"
                        >
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>
                        <p className="my-3">
                            Already have an account?{" "}
                            <Link className="text-decoration-none" to="/login">
                                Please Login here.
                            </Link>
                        </p>
                    </Form>
                    <SocialComponent></SocialComponent>
                    <Loading></Loading>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
