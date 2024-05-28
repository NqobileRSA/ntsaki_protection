import React from "react";
import "./ServicesSection.css";
import { ServiceCard } from "../../../components/components";
import { services } from "../../../constants";

const ServicesSection = () => {
  return (
    <section id="service" className="services pt-0 ">
      <div className="container">
        <div className="section-header">
          <span>Our Services</span>
          <h2>Our Services</h2>
        </div>
        <div className="row gy-5 cards-container">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              content={service.content}
              icon={service.icon}
              image={service.image}
              data-aos="fade-left"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
