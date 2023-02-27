import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navbar1() {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/quartos">Quartos</Nav.Link>
                <Nav.Link href="/eventos">Eventos</Nav.Link>
                <Nav.Link href="/sobre">Sobre</Nav.Link>
                <Nav.Link href="/contato"> Fale Conosco </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
      );
      
  }
  
  export default Navbar1;