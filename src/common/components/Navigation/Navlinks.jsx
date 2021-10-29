import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Navlinks.css";

const Navlinks = () => {
  return (
    <Nav>
      <Nav.Link>
        <span className="navbar-link">
          <Link to="">Home</Link>
        </span>
      </Nav.Link>
      <Nav.Link>
        <span className="navbar-link">
          <Link to="">Lab</Link>
        </span>
      </Nav.Link>
      <Nav.Link>
        <span className="navbar-link">
          <Link to="">About Us</Link>
        </span>
      </Nav.Link>
    </Nav>
  );
};

export default Navlinks;
