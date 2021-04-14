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
                    <Nav.Link href="/create">Dodaj aukcje</Nav.Link>
                    <Nav.Link href="/addUser">Rejestracja</Nav.Link>
                    <Nav.Link href="/login">Logowanie</Nav.Link>
                    <Nav.Link href="/profile">Profil</Nav.Link>
                    <Nav.Link href="/search">Wyszukiwarka</Nav.Link>
                </Nav>

                <Button variant="outline-light"
                        onClick={() => AuthService.logout()}
                >Logout</Button>
            </Navbar>

        </div>
        );
    }
}

export default NavBar;