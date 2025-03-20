import { Navbar, Container, Nav } from "react-bootstrap";
import { IoNotificationsOutline } from "react-icons/io5";
import logo from "../../assets/123123.png"
import './Naav.css'
const Naav = () => {
  return (
    <Navbar expand="lg" className="nav-custom py-3">
      <Container fluid className="px-4">
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <span className="brand-text">FickleFlight</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center gap-2">
            <Nav.Link href="#" className="nav-link-custom">Explore</Nav.Link>
            <Nav.Link href="#" className="nav-link-custom">Search</Nav.Link>
            <Nav.Link href="#" className="nav-link-custom">Hotels</Nav.Link>
            <Nav.Link href="#" className="nav-link-custom">Offers</Nav.Link>
            <Nav.Link href="#" className="icon-link">
              <IoNotificationsOutline size={24} />
            </Nav.Link>
            <Nav.Link href="#" className="profile-link">
              <img 
                src={logo} 
                alt="Profile" 
                className="rounded-circle"
                width="36"
                height="36"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Naav;
