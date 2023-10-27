import { HeaderStyles, ResetButtonStyles } from "./HeaderStyles";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { fetchDates } from "../../helpers/fetchDates";

export const Header = () => {
  const reloadPage = () => {
    localStorage.clear();
    fetchDates(true);
  };

  return (
    <HeaderStyles>
      <Navbar collapseOnSelect expand="lg" bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand><Link to="/">Calendar</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/instructions" className="nav-link">
                Instructions
              </Link>
            </Nav>
            <Nav>
              <Link to="/new-item" className="nav-link">
                <Button variant="primary">New event</Button>
              </Link>
              <ResetButtonStyles>
                <Button onClick={() => reloadPage()} variant="danger">
                  Reset data
                </Button>
              </ResetButtonStyles>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderStyles>
  );
};

