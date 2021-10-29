import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container, Row, Col } from "react-bootstrap";

import logo from "../../../images/icon.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <img src={logo} alt="Med Lab" />
            <p>© Med Lab</p>
          </Col>
          <Col className="social-icons">
            <span>
              <Link to="">
                <TwitterIcon style={{ color: "white" }} />
              </Link>
            </span>
            <span>
              <Link to="">
                <InstagramIcon style={{ color: "white" }} />
              </Link>
            </span>
            <span>
              <Link to="">
                <LinkedInIcon style={{ color: "white" }} />
              </Link>
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
