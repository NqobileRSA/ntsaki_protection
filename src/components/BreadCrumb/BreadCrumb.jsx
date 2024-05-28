import React from "react";
import { Link } from "react-router-dom";
import "./BreadCrumb.css";

const BreadCrumb = ({ pageName }) => {
  return (
    <>
      <div className="breadcrumb py-2">
        <div className="container">
          <Link to={"/"} className="home-link">
            <i className="bi bi-house-door-fill" /> Home
          </Link>
          &nbsp;&gt;&nbsp; <span>{pageName}</span>
        </div>
      </div>
    </>
  );
};

export default BreadCrumb;
