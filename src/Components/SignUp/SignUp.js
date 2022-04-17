import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase.init";
import Loading from "../Loading/Loading";
import SocialComponent from "../SocialComponent/SocialComponent";
import "./SignUp.css";

const SignUp = () => {
    const [errorTex, setErrorText] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");
    const [validated, setValidated] = useState(false);
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    let errorInfo;
    if (error || updateError) {
        errorInfo = (
            <p className="text-danger">
                Error: {error?.message} {updateError?.message}
            </p>
        );
    }
    if (user) {
        console.log(user);
    }
    if (loading || updating) {
        return <Loading></Loading>;
    }
    const handleSignUp = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        if (password !== conPassword) {
            return setErrorText(`Password Not matched!!!`);
        }

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log("Updated profile");
        navigate("/home");
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
                        onSubmit={handleSignUp}
                    >
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                onBlur={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="Name"
                                required
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                onBlur={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Enter email"
                                required
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
                                required
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicConPassword"
                        >
                            <Form.Label>Confirm-Password</Form.Label>
                            <Form.Control
                                onBlur={(e) => setConPassword(e.target.value)}
                                type="password"
                                placeholder="Confirm-Password"
                                required
                            />
                        </Form.Group>
                        <p className="text-danger">{errorTex}</p>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                        >
                            <Form.Check
                                onClick={() => setAgree(!agree)}
                                type="checkbox"
                                className={agree ? "" : "text-danger"}
                                label="Accept Elite Physiotherapy Center Terms adn Conditions."
                            />
                        </Form.Group>
                        {errorInfo}
                        <Button
                            className="w-100"
                            disabled={!agree}
                            variant="primary"
                            type="submit"
                        >
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
                </div>
            </div>
        </div>
    );
};

export default SignUp;
