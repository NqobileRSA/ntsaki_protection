import React from "react";
import "./ServiceDetails.css";

const ServiceDetails = ({ services }) => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div id="service-details" className="service-details desktop-details">
      <div className="container">
        <div className="row ">
          <div className="col-lg-4 ">
            <div className="service-box">
              <div className="services-list">
                {services.map((service, index) => (
                  <div
                    // href="#"
                    key={index}
                    className={`service-item ${
                      index === activeTab ? "active" : ""
                    }`}
                    onClick={() => handleTabClick(index)}>
                    <i
                      style={{ fontSize: "16px", marginRight: "10px" }}
                      className=" bi bi-arrow-right-circle "
                      color="currentColor"
                    />
                    <span>{service.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-8 ps-lg-5 ">
            <h3>{services[activeTab].title}</h3>
            <h4>{services[activeTab].description}</h4>
            <ul>
              {services[activeTab].benefits.map((benefit, index) => (
                <li key={index}>
                  <i
                    style={{ fontSize: "13px" }}
                    className=" bi bi-arrow-right"
                    color="currentColor"
                  />{" "}
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <p>{services[activeTab].details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
