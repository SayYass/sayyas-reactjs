import { Container, Nav, Navbar } from "react-bootstrap"

const Navbars = () => {
    return(
        <Navbar bg="primary" variant="dark"  >
        <Container>
        <Navbar.Brand href= "http://localhost:3000/news" >Sayyas News</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#src">Search</Nav.Link>
         
        </Nav>
        </Container>
      </Navbar>
    )
}
export default Navbars;