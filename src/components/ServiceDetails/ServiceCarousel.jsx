import React from "react";
import { Carousel } from "@mantine/carousel";
import "./ServiceDetails.css";

const ServiceCarousel = ({ services }) => {
  return (
    <div className="detail-carousel">
      <Carousel
        slideSize="90%"
        slideGap="20px"
        // controlSize={24}
        withControls={false}
        withIndicators
        align="start">
        {services.map((service, index) => (
          <Carousel.Slide
            key={index}
            style={{
              position: "relative",
              marginBottom: "70px",
              overflow: "auto",
              backgroundColor: "#f3f5fa",
              paddingTop: "20px",
              borderRight: "1px solid white",
            }}>
            <div className="service-details">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 ps-lg-5 ">
                    <h3>{service.title}</h3>
                    <h4>{service.description}</h4>
                    <ul>
                      {service.benefits.map((benefit, index) => (
                        <li key={index}>
                          <i
                            style={{ fontSize: "20px" }}
                            className=" bi bi-circle-right-arrow"
                            color="currentColor"
                          />
                          <span color="currentColor ">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <p>{service.details}</p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default ServiceCarousel;
