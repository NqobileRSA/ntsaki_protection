import React from "react";
import "./AboutUs.css";
import "../../ServicesPage/ServiceInfo/ServiceInfo.css";
import image from "../../../assets/images/PeopleImages.com-2699886-zoom.jpg";
import { Link } from "react-router-dom";
import { Tabs } from "@mantine/core";

const AboutUs = () => {
  return (
    <section id="about" className="tabs ">
      <div className="container">
        <div className="section-header">
          <span>Get To Know Us</span>
          <h2>Get To Know Us</h2>
        </div>
        <Tabs defaultValue="whoweare" color="gray" data-aos="fade-up">
          <Tabs.List>
            <Tabs.Tab value="whoweare">
              <h3 className="tabLabel" style={{ fontSize: "20px" }}>
                Who We Are
              </h3>
            </Tabs.Tab>
            <Tabs.Tab value="whatwedo">
              <h3 className="tabLabel" style={{ fontSize: "20px" }}>
                What We Do
              </h3>
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="whoweare">
            <div className="tab-pane active show pt-3" id="tab-1">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h4>Welcome To Ntsaki Protection</h4>
                  <p className="fst-italic">
                    At Ntsaki Protection, we are dedicated to providing
                    top-quality security training that empowers individuals to
                    excel in their careers and ensures that companies have
                    access to skilled professionals.
                  </p>
                  <p>
                    Our mission is to offer affordable security training courses
                    across various grades, from E to A, and facilitate PSIRA
                    registration and renewal processes. With our expert
                    instructors and comprehensive curriculum, we strive to equip
                    our students with the knowledge, skills, and confidence
                    needed to succeed in the security industry.
                  </p>
                  <p>
                    At Ntsaki Protection, we prioritize professionalism,
                    integrity, and excellence in everything we do. Whether you
                    are an aspiring security professional or a company in need
                    of trained personnel, we are here to support you on your
                    journey towards success.
                  </p>
                  <Link
                    to="/about"
                    className="btn btn-dark"
                    style={{
                      borderRadius: "1px",
                      // fontStyle: "oblique",
                      fontWeight: "bold",
                      padding: "10px 40px",
                    }}>
                    Learn more
                  </Link>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center ">
                  <img
                    src={image}
                    alt="Security Officer"
                    className="img-fluid "
                  />
                </div>
              </div>
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="whatwedo">
            <div className="tab-pane active show pt-3" id="tab-1">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h4>Our Training Services</h4>
                  <p className="fst-italic">
                    At Ntsaki Protection, we offer a wide range of security
                    training courses designed to meet the diverse needs of our
                    clients.
                  </p>
                  <p>
                    Our courses cover all grades of security training, from
                    entry-level positions to advanced certifications. We provide
                    flexible schedules, competitive pricing, and personalized
                    support to ensure that our students receive the best
                    possible training experience.
                  </p>
                  <p>
                    Additionally, we assist individuals with PSIRA registration
                    and renewal, guiding them through the process and ensuring
                    compliance with industry regulations.
                  </p>
                  <p>
                    Whether you are a company looking to train your staff or an
                    individual seeking to start or advance your career in
                    security, Ntsaki Protection is your trusted partner for all
                    your training needs.
                  </p>
                  <Link
                    to="/services"
                    className="btn btn-dark"
                    style={{
                      borderRadius: "1px",
                      fontStyle: "oblique",
                      fontWeight: "bold",
                      padding: "10px 40px",
                    }}>
                    Explore services
                  </Link>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img
                    src={image}
                    alt="Security Officer"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </section>
  );
};

export default AboutUs;
