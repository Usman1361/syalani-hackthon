import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import { Button } from "react-bootstrap";
import dynamic from "next/dynamic";
import Link from "next/link";

function NavBar(props: any) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
        </Navbar.Brand>
        <Navbar.Brand href="#home">
          <Link href="" className="NavbarSet">
            Event Management Site
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">
              <Link href="" className="NavbarSet">
                Features
              </Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Link href="/EventList" className="NavbarSet">
                View Event
              </Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Link href="" className="NavbarSet">
                About Us
              </Link>
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              <Button variant="outline-success">
                <Link href="/SinUp" className="linkstyle">
                  {props.SignUp}
                </Link>
              </Button>{" "}
            </Nav.Link>
            <Nav.Link eventKey={2}>
              <Button variant="outline-primary">
                <Link href="/SignIn" className="linkstyle">
                  {props.login}
                </Link>
              </Button>{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default dynamic(() => Promise.resolve(NavBar), { ssr: false });
