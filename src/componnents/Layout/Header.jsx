import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../img/logo.png'
import { Link } from 'react-router-dom';

import {
    BsSun,
    BsMoon

} from "react-icons/bs";


function Header({ dark, updateDark }) {
    return (
        <Navbar
            bg={`${dark ? "dark" : ""}`}
            variant={`${dark ? "dark" : "light"}`}
            expand="lg"
            className={`fw-bolder shadow-lg bg-opacity-75 ${dark ? "col-12" : "col-12"}`}
            fixed="top"
        >
            <Container>
                <Navbar.Brand href="#home"> {" { GoToDev } ".split("").map((letter, index) => {
                    return (
                        <span key={index} className="text-fun-pink fs-4">
                            {letter}
                        </span>
                    );
                })}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className='nav-link'>Home</Link>
                        <Link to="/About" className='nav-link'>About us</Link>
                        <Link to="/Expertise" className='nav-link'>Our expertise</Link>


                    </Nav>
                    <Nav>
                        <Link to="/Expertise" className='nav-link'>Join us</Link>
                        <NavDropdown
                            title="Lang">
                            <NavDropdown.Item href="#action4">
                                FR
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                EN
                            </NavDropdown.Item>
                        </NavDropdown>
                        <div className="row m-2 fw-bold">
                            {dark ? (
                                <BsMoon
                                    className='
                             fw-bold fs-4'
                                    onClick={() => {
                                        updateDark(!dark);
                                        localStorage.setItem("dark", !dark);
                                    }}
                                />
                            ) : (
                                <BsSun
                                    className=' fw-bold  fs-4'
                                    onClick={() => {
                                        updateDark(!dark);
                                        localStorage.setItem("dark", !dark);
                                    }}
                                />
                            )}
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header