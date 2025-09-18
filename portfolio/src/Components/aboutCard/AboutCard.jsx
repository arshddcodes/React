import React from "react";
import "./aboutCard.scss";

function AboutCard({ Name, Des }) {
  return (
    <div className="Abour-card">
      <h3>{Name}</h3>
      <p>{Des}</p>
    </div>
  );
}

export default AboutCard;
