import React from "react";
import "./AboutHero.scss";
import { Col, Container, Row } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import image from "../../assets/image.png";

function AboutHero() {
  return (
    <div className="AboutHero-Cont">
      <Container>
        <Row>
          <Col className="About-cont">
            <h1>about me</h1>
            <div>
              <h3>arshad</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Veritatis quis soluta vel culpa dolorem corporis, tempora quos
                totam quo eos. Porro neque possimus nemo tenetur odit commodi
                facilis voluptatum aliquid?
              </p>
            </div>
            <div className="SocialMedia-icons">
              <a href="https://github.com/arshddcodes" className="Icons">
                <FaLinkedin size={30} />
              </a>
              <a href="" className="Icons">
                <FaInstagramSquare size={30} />
              </a>
              <a href="" className="Icons">
                <FaGithub size={30} />
              </a>
              <a href="" className="Icons">
                <FaSquareXTwitter size={30} />
              </a>
            </div>
          </Col>
          <Col className="AboutImage-Cont">
            <div className="About-Image">
              <img src={image} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutHero;
