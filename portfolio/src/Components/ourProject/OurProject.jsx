import React from "react";
import "./ourproject.scss";
import ProjectCard from "../projectcard/ProjectCard";
import { Link } from "react-router-dom";

function OurProject({ data }) {
  const project = data.project;
  return (
    <div className="ourProject-Cont">
      <div className="ourProject-title">
        <h1>{data.heading}</h1>
        <h2>{data.subHeading}</h2>
      </div>
      <div className="cards-container">
        {project.map((pro) => (
          <Link to={`${pro.id}`} key={pro.id}>
            <ProjectCard title={pro.title} sub={pro.body || pro.subTitle} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default OurProject;
