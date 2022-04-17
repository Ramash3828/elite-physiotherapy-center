import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <Navbar
            collapseOnSelect
            style={{ backgroundColor: `#00B8B4` }}
            expand="lg"
            sticky="top"
        >
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <div className="text-start logo">
                        <p>
                            <small>ELITE</small>
                        </p>
                        <p>PHYSIOTHERAPY</p>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto myNav">
                        <Nav.Link as={NavLink} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/blogs">
                            Blogs
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/about">
                            About
                        </Nav.Link>
                        {user ? (
                            <Nav.Link
                                onClick={() => signOut(auth)}
                                as={NavLink}
                                to="/"
                            >
                                Log Out
                            </Nav.Link>
                        ) : (
                            <Nav.Link as={NavLink} to="/login">
                                Login
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
