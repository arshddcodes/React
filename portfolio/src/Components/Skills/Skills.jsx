import React, { useState } from "react";
import "./skills.scss";
import laptop from "../../assets/image1.jpg";
import { RiArrowDropDownLine } from "react-icons/ri";

function Skills() {
  const [toggle, setToggle] = useState(null);

  const skill = [
    {
      title: "UX/UI",
      content: "Designing user-friendly interfaces and experiencess",
    },
    {
      title: "Graphic Designing",
      content: "Creating visual assets and branding materials",
    },
    {
      title: "FrontEnd Dev",
      content:
        "React is an open-source JavaScript library used to build dynamic and interactive user interfaces. It follows a component-based structure and uses a virtual DOM for efficient rendering and updates.",
    },
  ];

  const handleToggle = (index) => {
    setToggle(toggle === index ? null : index);
  };

  return (
    <div className="skill-cont">
      <div className="skills">
        <div className="skill-head">
          <h1>What i Know</h1>
          <p>
            “As a Frontend Developer, I build clean, responsive, and engaging
            web experiences with React, HTML, CSS, JavaScript, Bootstrap, and
            Sass — backed by strong knowledge of UI/UX and Graphic Design.”
          </p>
        </div>
        {skill.map((skills, index) => (
          <div className="skills-each" key={index}>
            <div className="skill-title" onClick={() => handleToggle(index)}>
              <h3>{skills.title}</h3>
              <span className={`arrow ${toggle === index ? "open" : ""}`}>
                <RiArrowDropDownLine size={30} />
              </span>
            </div>
            {toggle === index && (
              <div
                className={`skill-content ${toggle === index ? "open" : ""}`}
              >
                <p>{skills.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="skill-img">
        <img src={laptop} />
      </div>
    </div>
  );
}

export default Skills;
