import { Navbar, Container } from "react-bootstrap";

import logo from "../../../images/logo.png";
import "./MainNavigation.css";
import Navlinks from "./Navlinks";

const MainNavigation = () => {
  return (
    <Navbar
      className="navbar"
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="light"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="med-lab" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Navlinks />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
