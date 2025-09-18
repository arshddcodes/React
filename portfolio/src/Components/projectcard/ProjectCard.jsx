import React from "react";
import "./ProjectCard.scss";
import image from "../../assets/image1.jpg";

function ProjectCard({ title, sub }) {
  return (
    <div className="pro-card">
      <div className="pro-img">
        <img src={image} alt="" />
      </div>
      <div className="pro-des">
        <h1>{title}</h1>
        <h5>{sub}</h5>
      </div>
    </div>
  );
}

export default ProjectCard;
