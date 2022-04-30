import './Header.css';
// import Nav from 'react-bootstrap/Nav';
import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';


function Header() {
    return (
        <Navbar bg="primary" variant="dark" className="container-top">
            <Container className="container">
                <Nav className="me-auto navy nav-container">
                    <Navbar.Brand className="brand" href="/">Blue Sky Bank</Navbar.Brand>
                    <div className="links">
                        <Nav.Link className="link" href="/">Home</Nav.Link>
                        <Nav.Link className="link" href="/about">About</Nav.Link>
                        <Nav.Link className="link" href="/mortgage">Mortgage</Nav.Link>
                        <Nav.Link className="link" href="/checking">Checking</Nav.Link>
                        <Nav.Link className="link" href="/savings">Savings</Nav.Link>
                        <Nav.Link className="link" href="/features">Features</Nav.Link>
                        <Nav.Link className="link" href="/pricing">Pricing</Nav.Link>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;