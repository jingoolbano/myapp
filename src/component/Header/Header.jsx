import React from "react";
import { Container, Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>ASAL</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer to="/cart">
                                <Nav.Link >
                                    سبد خرید
                                    <i className="fa fa-shopping-cart px-2" aria-hidden="true"></i>
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/account">
                                <Nav.Link>
                                    اکانت
                                    <i className="fa fa-user-circle-o px-2" aria-hidden="true"></i>
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header >
    )
}

export default Header