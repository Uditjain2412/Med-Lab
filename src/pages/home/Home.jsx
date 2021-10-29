import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import testing from "../../images/testing.svg";
import "./Home.css";

const Home = () => {
  return (
    <div id="home">
      <Container>
        <Container className="welcome">
          <Row>
            <Col md className="welcome-1">
              {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#FA4D56"
                d="M62.8,-19.3C68.8,-1.6,52.7,24.4,32,38C11.2,51.7,-14.1,53,-33,40.4C-52,27.9,-64.5,1.4,-57.9,-16.9C-51.3,-35.3,-25.7,-45.5,1.3,-45.9C28.3,-46.4,56.7,-37,62.8,-19.3Z"
                transform="translate(100 100)"
              />
            </svg> */}
              <div>
                <h2>Monitor your health</h2>
                <Link to="/lab">
                  <Button>
                    Go <ArrowForwardIcon />{" "}
                  </Button>
                </Link>
              </div>
            </Col>
            <Col md className="welcome-2">
              <img src={testing} alt="testing" />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Home;
