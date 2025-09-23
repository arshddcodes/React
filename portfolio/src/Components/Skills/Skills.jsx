import React, { useState } from "react";
import "./skills.scss";
import laptop from "../../assets/image1.jpg";
import { RiArrowDropDownLine } from "react-icons/ri";

function Skills() {
  const [toggle, setToggle] = useState(null);

  const skill = [
    {
      title: "react js",
      content:
        "React is an open-source JavaScript library used to build dynamic and interactive user interfaces. It follows a component-based structure and uses a virtual DOM for efficient rendering and updates.",
    },
    {
      title: "Node js",
      content:
        "React is an open-source JavaScript library used to build dynamic and interactive user interfaces. It follows a component-based structure and uses a virtual DOM for efficient rendering and updates.",
    },
    {
      title: "express js",
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            odit veniam optio similique fugit! Similique aspernatur itaque
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
