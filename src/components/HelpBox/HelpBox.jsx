import React from "react";
import "./HelpBox.css";
import { Link } from "react-router-dom";
const HelpBox = () => {
  return (
    <Link
      to={{
        pathname: "/Contact",
        hash: "#faq",
      }}
      className="help-box d-flex flex-column justify-content-center align-items-center section-bg">
      <i color="currentColor" className="help-icon bi bi-headphones" />
      <h4>Have a Question?</h4>
      <p className="d-flex align-items-center mt-2 mb-0">
        <i
          color="currentColor"
          className="me-2 bi bi-phone"
          style={{ fontSize: "20px" }}
        />{" "}
        <span>011 860 0056</span>
      </p>
      <p className="d-flex align-items-center mt-1 mb-0">
        <i
          color="currentColor"
          className="me-2 bi bi-envelope"
          style={{ fontSize: "20px" }}
        />{" "}
        contact@example.com
      </p>
    </Link>
  );
};

export default HelpBox;
