import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

class NavBar extends React.Component {
    render() {
        return (
        <div className="Navbar">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/home">Auctions</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/create">Create</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>

        </div>
        );
    }
}

export default NavBar;