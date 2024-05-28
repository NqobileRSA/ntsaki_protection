import React from "react";
import "./Banner.css";

const Banner = ({ image, title }) => {
  return (
    <section
      id="hero"
      style={{
        backgroundImage: `url(${image})`,
      }}>
      <div className="hero-container">
        <h1>{title}</h1>
        <h2>.</h2>
      </div>
    </section>
  );
};

export default Banner;
