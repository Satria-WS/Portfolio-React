import React from "react";

function Skills() {
  return (
    <div>
      <h2 className="MarginTop-25">My skills</h2>

      <div class="skill-row MarginTop-75 ">
        <img
          class="code-img"
          src="https://media4.giphy.com/media/d9AC9cKuNu165UxNtj/giphy.gif?cid=790b761181d47dc5bc43aa5e8fef0458358a80fa0a314a3e&rid=giphy.gif&ct=s"
          style={{
            width: "200px",
            height: "250px",
            position: "relative",
            top: "40px",
          }}
          alt="code-img"
        />
        <h3>Skills Development</h3>
        <div
          className="Design-Development EmptyMarginTop "
          style={{ width: "1040px" }}
        >
          <tr>
            <td>
              <ul>
                <li>Web API Development with React </li>
                <li>Web3 Decentralised App with Internet Computer</li>
                <li>Build Databases server with & Authentication Security</li>
                <li>Data base with MongoDB & MySQL</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Knowledge of Linux , Windows , WSL</li>
                <li>Comprehensive knowledge of HTML , CSS , JS & React Js</li>
                <li>Exclusively used React-Hooks to handle app life-cycle processes</li>
                <li>Built custom components for UX-Library</li>
              </ul>
            </td>
          </tr>
        </div>
      </div>
      <div class="skill-row">
        <img
          class="chilli-img"
          src="https://media1.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif?cid=ecf05e47u7tab19wekr00y7vzy23gygymmhi7dydzfynojjn&rid=giphy.gif&ct=s"
          alt="React-img"
        />
        <h3>React Project Development</h3>
        <div className="React-Project-Development full-width">
          <ul>
            <li>
              <p>Personal Portfolio</p>
            </li>
            <li>
              <p>Web App API</p>
            </li>
            <li>
              <p>E-commerce site</p>
            </li>
            <li>
              <p>Brochure site</p>
            </li>
            <li>
              <p>Mini sould finaly</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="Language-Program EmptyMarginTop EmptyMarginBot">
        {/* <h3>language program</h3> */}
        <table cellSpacing={30}>
          <ul style={{ width: 1000 }}>
            <p style={{ textAlign: "left" }}>My Languange Program :</p>
            <tr>
              <td>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>React-JS</li>
                  <li>Angular</li>
                  <li>JSON</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Node-JS</li>
                  <li>ExpressJS</li>
                  <li>Git hub</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>TypeScript</li>
                  <li>JQUERY</li>
                  <li>Bootstrap</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>PHP</li>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Rust</li>
                  <li>Mokoto</li>
                  <li>Dfx</li>
                </ul>
              </td>
            </tr>
          </ul>
        </table>
      </div>
    </div>
  );
}

export default Skills;
