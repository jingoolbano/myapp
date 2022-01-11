import React from "react";
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
                <Container>
                    <Navbar.Brand href="/">ASAL</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/cart" >
                                سبد خرید
                                <i className="fa fa-shopping-cart px-2" aria-hidden="true"></i>
                            </Nav.Link>
                            <Nav.Link href="/account" >
                                اکانت
                                <i className="fa fa-user-circle-o px-2" aria-hidden="true"></i>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header >
    )
}

export default Header