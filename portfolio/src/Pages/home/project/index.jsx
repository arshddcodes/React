import React from "react";
import OurProject from "../../../Components/ourProject/OurProject";
import { Project } from "../../../Data/data";

function project() {
  const data = {
    heading: "Featured Projects",
    subHeading: "lorem ipsum fake dummy text here",
    project: Project,
  };
  return (
    <div>
      <OurProject  data={data}/>;
    </div>
  );
}

export default project;
