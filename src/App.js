import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  Button,
  Container,
  Row,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Carousel,
  Col,
  Badge,
  Modal,
} from "react-bootstrap";
import { useState } from "react";
import pizza1 from "./Images/pizza1.jpg";
import pizza2 from "./Images/pizza2.jpg";
import pizza3 from "./Images/pizza3.jpg";
import menu1 from "./Images/menu1.jpg";
import menu2 from "./Images/menu2.jpg";
import menu3 from "./Images/menu3.jpg";
import menu4 from "./Images/menu4.jpg";
import Header from "./components/Header";
import CardItem from "./components/Card";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handClick = () => {
    setcount((prev) => prev + 1);
  };
  const [count, setcount] = useState(0);
  return (
    <Container>
      <Header handleShow={handleShow} count={count} />
      <Row>
        <Carousel>
          <Carousel.Item>
            <img src={pizza1} text="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={pizza2} text="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={pizza3} text="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row className="mt-5">
        <CardItem menu={menu1} handleClick={handClick} />
        <CardItem menu={menu2} handleClick={handClick} />
        <CardItem menu={menu3} handleClick={handClick} />
        <CardItem menu={menu4} handleClick={handClick} />
      </Row>
      <Row>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </Container>
  );
}

export default App;
