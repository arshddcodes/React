import React from "react";
import "./AboutHero.scss";
import { Col, Container, Row } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareDribbble, FaSquareXTwitter } from "react-icons/fa6";
import image from "../../assets/image.png";

function AboutHero() {
  return (
    <div className="AboutHero-Cont">
      <Container>
        <Row>
          <Col className="About-cont">
            <h1>About me</h1>
            <div>
              <h3>Arshdd Ux</h3>
              <p>
                “I’m a Frontend Developer who enjoys building modern and
                responsive websites using React, HTML, CSS, JavaScript,
                Bootstrap, and Sass. With a background in UI/UX and Graphic
                Design, I focus on creating web experiences that look great and
                work smoothly.”
              </p>
            </div>
            <div className="SocialMedia-icons">
              <a href="https://www.linkedin.com/in/arshddux/" className="Icons">
                <FaLinkedin size={30} />
              </a>
              <a href="https://www.instagram.com/arshddux/" className="Icons">
                <FaInstagramSquare size={30} />
              </a>
              <a href="https://github.com/arshddcodes" className="Icons">
                <FaGithub size={30} />
              </a>
              <a href="https://x.com/arshddux" className="Icons">
                <FaSquareXTwitter size={30} />
              </a>
              <a href="https://dribbble.com/arshddux" className="Icons">
                <FaSquareDribbble size={30} />
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
