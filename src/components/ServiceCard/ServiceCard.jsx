import React from "react";
import "./ServiceCard.css";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, icon, image, content }) => {
  return (
    <div className="col-xl-4 col-md-6 ">
      <div className="service-item">
        <div className="img">
          <img
            src={image}
            className="img-fluid"
            alt="security-training psira"
          />
        </div>
        <div className="details position-relative">
          <div className="icon">
            <i className={icon} />
          </div>
          <Link to={"/services"} className="stretched-link">
            <h3>{title}</h3>
          </Link>
          <p>{content}</p>
          <div id="" className="mt-3">
            <Link
              to={"/about"}
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
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
