
import cloud from "../../assets/images/cloud.png"
import React from "react";

function Profile() {
  return (
    <div>
      <div className="top-container">
        <img className="top-cloud" src={cloud} alt="cloud-img" />
        <h1>Hello</h1>
        <h2>
          <b>
            a <span className="pro">pro</span>
          </b>
          grammer
        </h2>
        <img className="bottom-cloud" src={cloud} alt="cloud-img" />

        <img className="mountain" src={require("../../assets/images/mountain.png")}/>
        
      </div>

      <div className="profile">
        <img
          src="/images/selow-crop.png"
          style={{ width: "170px", height: "170px", alt: "photo -profile" }}
        />
        <h2>My profile</h2>
        <p className="Profile">
          I am a self-taught JavaScript developer with a Masters degree in FTKE
          Trisakti University. Currently Iam focused on learning in Javascript ,
          web development including front-end and back-kend, management with
          git. I do programming fulltime , since i'm a career changer . Iam
          always keep learning into the fundamental of the language and moving
          forward into web development with the latest technologies .
        </p>
        <p className="intro"></p>
        <hr />
      </div>
    </div>
  );
}

export default Profile;
