import {useState, useEffect} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import React from "react";

import './navBar.styles.css'


const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    // render less often, here used to decide render scroll or not
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>

            <Container>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <div className={'nav-text'}>
                            <Nav.Link href="#home"
                                      className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                                      onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>

                            <Nav.Link href="#projects"
                                      className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                                      onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>

                            <Nav.Link href="#skills"
                                      className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'}
                                      onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        </div>
                    </Nav>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
