import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-6 d-flex flex-column align-items-center  align-items-md-start justify-content-center">
                        <div className="logo-area">
                            <Navbar.Brand as={Link} to="/">
                                <div className="text-start logo m-0">
                                    <p>
                                        <small>ELITE</small>
                                    </p>
                                    <p>PHYSIOTHERAPY</p>
                                </div>
                            </Navbar.Brand>
                        </div>
                        <p className="m-0 mt-2">
                            <strong> Email: </strong>
                            elitephysiotherapy@gmail.com
                        </p>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-md-end justify-content-center ">
                        <p>&copy; Copyright 2022</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
