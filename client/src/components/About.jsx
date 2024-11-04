import React from "react";
import manage from "../assets/aboutpage/manage.png";
import laptop from "../assets/aboutpage/laptop.png";
import happyballoon from "../assets/aboutpage/happyballoon.png";
import money from "../assets/aboutpage/money.png";
import text from "../assets/aboutpage/text.png";
import "./about.css";

const About = () => {
  return (
    <div className="flex-container">
      {/* Section 1 - Intro Text Section */}
      <div className="section intro-text">
        <div className="text-content1"> <h3>First Section</h3>
        <p>This is the first section with some text content.</p></div>
        <div className="text-content2"> <h3>First Section</h3>
        <p>This is the first section with some text content.</p></div>
        <div className="text-content1"> <h3>First Section</h3>
        <p>This is the first section with some text content.</p></div>
        <div className="text-content2"> <h3>First Section</h3>
        <p>This is the first section with some text content.</p></div>
        <div className="text-content1"> <h3>First Section</h3>
        <p>This is the first section with some text content.</p></div>
        <div className="text-content2"> <h3>First Section</h3>
        <p>This is the first section with some text content.</p></div>
       
      </div>

      {/* Section 2 - Grid Layout Section */}
      <div className="section content-grid">
        <div className="image-grid">
          {/* First Row */}
          <div className="grid-item " >
            <img src={manage} alt="Manage" />
          </div>
          <div className="grid-item " >
            <img src={laptop} alt="Laptop" />
          </div>

          {/* Second Row */}
          <div className="grid-item">
  <h4 >Creative Developer</h4>
</div>

          <div className="grid-item">
            <img src={happyballoon} alt="Balloon" />
          </div>
          <div className="grid-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptatibus.</div>

          {/* Third Row */}
          <div className="grid-item" >
            <img src={money} alt="Money" />
          </div>
          <div className="grid-item">
            <img src={text} alt="Text" />
          </div>
          <div className="grid-item">
            <img src={text} alt="Text" />
          </div>

          {/* Fourth Row */}
          <div className="grid-item" >
            <img src={happyballoon} alt="Happy Balloon" />
          </div>
          <div className="grid-item" >
            <img src={manage} alt="Manage" />
          </div>
          <div className="grid-item">Remaining content</div>
        </div>
      </div>

      {/* Section 3 - Outro Text Section */}
      <div className="section outro-text">
        <h3>Third Section</h3>
        <p>This is the third section with some additional text content.</p>
      </div>
    </div>
  );
};

export default About;
