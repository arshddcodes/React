import React from "react";
import { Badge, Card, Image, ListGroup } from "react-bootstrap";

function FavouriteCard() {
  return (
    <Card className="stick-top" style={{ top: "20px;" }}>
      <Card.Header className="bg-warning text-dark">
        <h4 className="mb-0">Your Fav</h4>
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush" className="border-0">
          <ListGroup.Item className="border-0 px-0 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <Image
                src=""
                alt="image"
                width={24}
                height={24}
                className="me-2"
                rounded
              />
              <span className="fw-medium ">fav Currency</span>
            </div>
            <Badge bg="success">Price</Badge>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default FavouriteCard;
