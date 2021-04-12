import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import AuthService from "../services/auth.service";


class NavBar extends React.Component {
    render() {
        return (
        <div className="Navbar">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/home">Auctions</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/create">Create</Nav.Link>
                    <Nav.Link href="/addUser">Create user</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                </Nav>
                <Form inline>
                    <Button variant="outline-light"
                   onClick={() => AuthService.logout()}
                    >Logout</Button>
                </Form>
            </Navbar>

        </div>
        );
    }
}

export default NavBar;