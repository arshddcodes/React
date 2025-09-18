import React from "react";
import "./projectdes.scss";
import image from "../../assets/image1.jpg";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Project } from "../../Data/data";

function ProjectDes() {
  const { id } = useParams();
  const projectDes = Project.find((pro) => pro.id === parseInt(id));

  if (!projectDes) {
    return (
      <div className="detail-page">
        <Container>
          <Row className="justify-content-center">
            <Col className="text-center">
              <h1>Project Not Found</h1>
              <p>The project with id {id} does not exist.</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <img src={image} className="detail-img" alt={projectDes.title} />
            <h1 className="detail-title mt-4">{projectDes.title}</h1>
            <p className="detail-des mt-3">{projectDes.des}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProjectDes;
