import React from "react";

function ContactMe() {
  return (
    <div>
      <div className="contact-me">
        {/* FIXME */}
        <h2 className="problemo">...</h2>

        {/*         
        <p class="contact-message">write contact message here</p>
        <a class="btn" href="mailto:extencezone02@gmail.com">
          CONTACT ME
        </a> 
        */}
      </div>
      <div className="bottom-container">
        <a href="" class="footer-link">
          LinkedIn
        </a>
        <a href="" class="footer-link">
          Twitter
        </a>
        <a href="https://github.com/Satria-WS" class="footer-link">
          Github
        </a>
        <p
          className="emailrigth"
          style={{ color: "#EAF6F6", fontSize: "1.1rem", padding: "20px" }}
        >
          extencezone02@gmail.com
        </p>
      </div>
    </div>
  );
}

export default ContactMe;
