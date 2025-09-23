import React from "react";
import "./Footer.scss";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-item">
          <p>Email :</p>
          <a href="mailto:arshadkallankodan@gmail.com">
            arshadkallankodan@gmail.com
          </a>
        </div>
        {/* <div className="footer-item">
          <p>Call Today :</p>
          <a href="tel:+91 9778132218">+91 9778132218</a>
        </div> */}
        <div className="footer-item social">
          <p>Social :</p>
          <div className="social-icons">
            <a href="https://github.com/arshddcodes" className="Icons">
              <FaLinkedin />
            </a>
            <a href="https://github.com/arshddcodes" className="Icons">
              <FaInstagramSquare />
            </a>
            <a href="https://github.com/arshddcodes" className="Icons">
              <FaGithub />
            </a>
            <a href="https://github.com/arshddcodes" className="Icons">
              <FaSquareXTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © Copyright 2025. All Rights Reserved by <span>Arshddux</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
