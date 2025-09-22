import "./contact.scss";
import React, { useRef } from "react";
// import { Button } from "bootstrap";
import image from "../../../assets/image1.jpg";
import { Col, Container, Row } from "react-bootstrap";

function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const serviceRef = useRef();
  const helpRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      service: service.current.value,
      help: helpRef.current.value,
    };
    console.log("form", form);
  };

  return (
    <div className="Contact-cont">
      <Container>
        <Row>
          <Col className="avater-image">
            <div className="avater-image-cont">
              <img src={image} alt="laptop-image" />
            </div>
          </Col>
          <Col>
            <div className="contact-titles">
              <h1>lets work together</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                nesciunt
              </p>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-top">
                  <div className="form-input">
                    <label>Name</label>
                    <input type="text" ref={nameRef} placeholder="Name" />
                  </div>
                  <div className="form-input">
                    <label>Email</label>
                    <input type="email" ref={emailRef} placeholder="Email" />
                  </div>
                </div>
                <div className="form-btm">
                  <div className="form-input">
                    <label>Service Needed?</label>
                    <input type="text" ref={serviceRef} />
                  </div>
                  <div className="form-input">
                    <label htmlFor="">What can i help for you?</label>
                    <textarea ref={helpRef} />
                  </div>
                </div>
                <button className="contact-btn" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
