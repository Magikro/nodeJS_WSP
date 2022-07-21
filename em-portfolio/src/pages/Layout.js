import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../index.css';


const Layout = () => {
    return (
        <Navbar bg="dark" variant="dark" fixed="top" className="navi">
            <Container>
                <Navbar.Brand href="/" >MARSHALL</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="Contact">Contact</Nav.Link>
                <Nav.Link href="About">About</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="Login">Login</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Layout;