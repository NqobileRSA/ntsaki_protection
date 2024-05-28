import React from "react";
import "./CareerCard.css";

const CareerCard = ({ title, content, imageSrc, grades }) => {
  return (
    <article className="careerCard">
      <div className=" border-0 ">
        <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
          <a href="#!">
            <img
              className="img-fluid bsb-scale bsb-hover-scale-up"
              loading="lazy"
              src={imageSrc}
              alt="Business"
              style={{ opacity: "0.95", height: "300px" }}
            />
          </a>
        </figure>
        <div className="card-body border bg-white p-3 overflow-hidden">
          <div className="entry-header mb-2">
            <h2
              className="card-title entry-title h4 mb-0 text-start "
              style={{ color: "#52565e" }}>
              {title}
            </h2>
          </div>
          <p className="card-text entry-summary text-secondary text-start">
            {content}
          </p>
        </div>
        <div className="card-footer border border-top-0 bg-white p-4 ">
          <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
            <li>
              <a
                className="fs-7 text-decoration-none d-flex align-items-center"
                href="#!"
                style={{ color: "#0c0d0e" }}>
                <i className="bi bi-journals" style={{ fontSize: "20px" }} />
                <span className="ms-2 fs-7">Grades</span>
              </a>
            </li>
            <li>
              <span className="px-3">|</span>
            </li>
            <li>
              <a
                className=" text-decoration-none d-flex align-items-center"
                href="#!"
                style={{ color: "#0c0d0e" }}>
                <i className="bi bi-pencil" />
                <span className="ms-2 fs-7">
                  <ul className="d-flex gap-2 p-0">
                    {grades.map((grade, index) => (
                      <li key={index} style={{ fontWeight: "500" }}>
                        {grade}
                      </li>
                    ))}
                  </ul>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default CareerCard;
