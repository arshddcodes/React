import React from "react";
import UserCard from "react-bootstrap/Card";

function UserCard(data) {
  return (
    <div>
      <Card>
        <Card.Body>{data.name}</Card.Body>
      </Card>
    </div>
  );
}

export default UserCard;
