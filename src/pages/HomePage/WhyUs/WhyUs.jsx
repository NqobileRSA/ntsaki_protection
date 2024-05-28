import React, { useState, useEffect } from "react";
import "./WhyUs.css";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const WhyUs = () => {
  return (
    <section id="whyUs" className="whyUs">
      <div className="container">
        <div className="row no-gutters">
          <div className="image imageWrap col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
          <div className="col-xl-7 ps-4 ps-lg-5 pe-4 pe-lg-1 d-flex align-items-stretch">
            <div className="content d-flex flex-column justify-content-center">
              <div className="section-header">
                <span>Why Choose Us?</span>
                <h2>Why Choose Us?</h2>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}>
                <p style={{ fontWeight: "400" }}>
                  Ntsaki Protection is your trusted partner for comprehensive
                  security training solutions. Here's why you should choose us:
                </p>
                <p>
                  As a customer oriented and driven company, we strive to
                  provide all our clients with quality and professional services
                  at all times to ensure customer satisfaction.{" "}
                </p>
                <p>
                  All projects focus on meeting our clients requirements and
                  security specifications within time and budget. With open
                  communication and transparency in our business, we are able to
                  maintain a healthy and positive relationship with our
                  customers.
                </p>
                <p>
                  We handle any customer complaints or dissatisfaction
                  professionally and aim to resolve the problem amicably, in
                  time and with the least amount of inconvenience for the
                  client.
                </p>
              </div>
              <Link
                to={"/Contact"}
                className="btn btn-dark mt-5 "
                style={{
                  borderRadius: "3px",
                  width: "50%",
                  alignSelf: "center",
                  // fontStyle: "oblique",
                  fontWeight: "bold",
                  padding: "10px 40px",
                  minWidth: "250px",
                }}>
                Let's Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
