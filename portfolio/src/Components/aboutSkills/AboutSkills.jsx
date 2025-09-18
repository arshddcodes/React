import React from "react";
import "./aboutSkills.scss";
import AboutCard from "../aboutCard/AboutCard";
import { skills } from "../../Data/data";

function AboutSkills() {
  return (
    <div className="AboutSkill-Cont">
      <h1>Skills</h1>
      <div className="Cards-Cont">
        {skills.map((skill, index) => (
          <AboutCard Name={skill.name} Des={skill.des} key={index} />
        ))}
      </div>
    </div>
  );
}

export default AboutSkills;
