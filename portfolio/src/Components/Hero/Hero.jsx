import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../assets/image.png";
import "./hero.scss";

function Hero() {
  return (
    <section className="hero-cont">
      <Container>
        <Row className="row-cont">
          <Col className="col-one">
            <div className="hero-name">
              <span>Arshad</span>
              <h1>Web</h1>
            </div>
          </Col>
          <Col className="hero-img">
            <img src={image} />
          </Col>
          <Col>
            <div className="hero-prof">
              <h1>Developer</h1>
              <p>hey this is dummy text</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
