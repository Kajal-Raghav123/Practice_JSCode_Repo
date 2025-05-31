import React from "react";

function Subject() {
  return (
    <div className="subject-section">
      <div className="sub1">
        <a href="">
          <img src="/portfolio-image.png" alt="" />
        </a>
        <a href="">
          <img src="/dark.png" alt=""/>
        </a>
        <ul>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Terms and Conditions</a>
          </li>
          <li>
            <a href="">contact</a>
          </li>
        </ul>
      </div>
      <div className="sub2">
        <h3>Subject Areas</h3>
        <ul>
          <li>
            <a href="">Literacy</a>
          </li>
          <li>
            <a href="">Numeracy</a>
          </li>
          <li>
            <a href="">Science</a>
          </li>
          <li>
            <a href="">Geography</a>
          </li>
          <li>
            <a href="">Health and Wellbeing</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Subject;
