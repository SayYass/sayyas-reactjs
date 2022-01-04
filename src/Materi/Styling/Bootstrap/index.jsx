import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Container, Nav, Navbar} from "react-bootstrap";




export default class Navbars extends React.Component{
    render(){
        return(
              
            <Navbar bg="primary" expand="lg" variant="dark" >
  <Container>
    <Navbar.Brand href="#home">Ilyas Dewanto</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#bio" >Biography</Nav.Link>
        <Nav.Link href="#skill">Skill</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>

        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

        )
    }
}