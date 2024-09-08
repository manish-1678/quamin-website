import React from "react";
import "../../../index.css";
import "./Story.css";
import img from "../../../assets/blog-story.webp";

const Story = () => {
  return (
    <div className="Section-Story container">
      <div className="Story-Img">
        <img src={img} alt="story"/>
      </div>
      <div className="Story-Text">
        <h1>Who are we?</h1>
        <p>
          Quamin stands as a pioneering technical service provider, dedicated to
          delivering cutting-edge solutions and unparalleled expertise across a
          wide spectrum of technological fields. With a firm commitment to
          innovation, Quamin harnesses the power of technology to drive growth,
          efficiency, and success for businesses across diverse industries.
        </p>

        <p>
          At the core of Quamin’s offerings lies a comprehensive suite of
          services designed to meet the evolving needs of today’s digital
          landscape. From IT consulting to system integration, Quamin provides
          tailored solutions that enhance operational capabilities and
          streamline processes. Their team of experienced professionals
          collaborates closely with clients to understand their unique
          challenges and objectives, ensuring that each solution is customized
          to achieve optimal results.
        </p>
      </div>
    </div>
  );
};

export default Story;
