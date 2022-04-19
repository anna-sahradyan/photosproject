import React from 'react';
import s from './Header.module.scss';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";


const Header = () => {
    return (
        <>
            <header className={s.header}>
                <Navbar collapseOnSelect expand="lg"  variant="dark" className={s.burgerMenu}>
                    <Navbar.Brand href="#home">
                    </Navbar.Brand>
                    <img src='/images/menu.png'alt="menu" className={s.menu}/>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown  id="collasible-nav-dropdown">

                                <NavDropdown.Item href="#action/3.2">
                                    <div className={s.userImage}>Anna
                                        <img src='/images/userWoman.png' alt="user"/>
                                    </div>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">a.sahradyan72@gmail.com</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">About Me</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#/"> Gallery
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>



            </header>
        </>
    );
};

export default Header;