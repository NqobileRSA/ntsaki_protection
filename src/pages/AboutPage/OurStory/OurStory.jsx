import React from "react";
import { Image } from "@mantine/core";
import "./OurStory.css";
import storyImage from "../../../assets/images/commuter-getting-bag-checked-from-airport-security-officer.jpg";

const OurStory = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row position-relative">
          <div
            className="col-lg-7 about-img "
            style={{ backgroundImage: `url(${storyImage})` }}
          />
          <div className="col-lg-7">
            <h2></h2>
            <div className="our-story">
              <h4>Est. 2019</h4>
              <h3>Our Story</h3>
              <p>
                Ntsaki Protection was founded in 2019 with a vision to bridge
                the gap between affordable and high-quality security training.
                Recognizing the crucial role of a well-trained security
                workforce, our founders set out to create a platform that would
                empower individuals and companies alike to achieve their
                security goals.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle" />
                  <span>
                    Commitment to accessibility: Offering affordable courses for
                    all
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle" />
                  <span>
                    Excellence in training: Experienced instructors and
                    industry-relevant programs
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle" />
                  <span>
                    Continuous improvement: Adapting to evolving industry needs
                  </span>
                </li>
              </ul>
              <p>
                Over the years, we have grown into a trusted provider of
                security training, dedicated to nurturing the next generation of
                security professionals. Our vision is to be the premier
                destination for comprehensive security education, empowering
                individuals and businesses to create a safer world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
