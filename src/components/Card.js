import { Col, Button, Card } from "react-bootstrap";
const CardItem = (props) => {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={props.menu} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" onClick={props.handleClick}>
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default CardItem;
