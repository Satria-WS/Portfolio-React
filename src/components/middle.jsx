import React from "react";

import Profile from "./profile";
import Skills from "./skill";
import ContactMe from "./contact";
import WorkExperience from "./work-experience";

function MiddleContainer() {
  return (
    <div className="middle-container">
      <Profile />
      <WorkExperience />
      <Skills />
      <ContactMe />
    </div>
  );
}

export default MiddleContainer;
