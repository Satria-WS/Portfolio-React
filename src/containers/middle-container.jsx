import React from "react";
//import Profile from "../components/top-container/profile";
import WorkExperience from "../components/middle-container/work-experience";
import Skills from "../components/middle-container/skill"


function MiddleContainer() {
  return (
    <div className="middle-container">
      <WorkExperience />
      <Skills />
    </div>
  );
}

export default MiddleContainer;
