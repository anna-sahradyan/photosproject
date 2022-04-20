import React from 'react';
import s from './Header.module.scss';
import {ButtonGroup, Dropdown} from "react-bootstrap";


const Header = () => {
    return (
        <>
            <header className={s.header}>
                <Dropdown as={ButtonGroup} className={s.burgerMenu}>
                    <Dropdown.Toggle split variant="outline-dark" id="dropdown-split-basic"><img src='/images/menu.png'alt="menu" className={s.menu}/></Dropdown.Toggle>/>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1"> <div className={s.userImage}>Anna
                            <img src='/images/userWoman.png' alt="user"/>
                        </div></Dropdown.Item>
                        <Dropdown.Item href="#action/2.2">a.sahradyan72@gmail.com</Dropdown.Item>
                        <Dropdown.Item href="/about">About Me</Dropdown.Item>
                        <Dropdown.Item href="/">Gallery</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>
            </header>
        </>
    );
};

export default Header;