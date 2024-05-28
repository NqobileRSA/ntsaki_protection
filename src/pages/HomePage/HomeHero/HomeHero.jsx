import React from "react";
import "./HomeHero.css";

import imageA from "../../../assets/images/business-security-guards.jpeg";
import imageB from "../../../assets/images/blackSecurity.jpg";
import imageC from "../../../assets/images/blackwalky.jpg";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
// import { Image } from "@mantine/core";

const HomeHero = () => {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const images = [imageA, imageB, imageC];
  return (
    <section className="hero_area">
      <div className="hero_bg_box">
        <Carousel
          plugins={[autoplay.current]}
          withControls={false}
          loop={true}
          withIndicators>
          {images.map((image, index) => (
            <Carousel.Slide key={index}>
              <div className="img-box">
                <img src={image} alt="security training psira" />
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>

      <div className="slider_section">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="detail-box">
                <h1>
                  Security Training <br /> And Services
                </h1>
                {/* <p>Security Training And Services</p> */}
                <h2>
                  <i className="bi bi-quote" />
                  <span> Igniting Excellence </span>
                  <span className="qouteMark">
                    <i
                      id="mark-2"
                      className="bi bi-quote "
                      style={{ transform: "rotate(15deg)" }}
                    />
                  </span>
                </h2>
                <div className="btn-box">
                  <a href="#about" className="btn-1">
                    Read more
                  </a>
                  <Link to="/contact" className="btn-2">
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
