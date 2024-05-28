import React from "react";
import "./Vision.css";
import image from "../../../assets/images/securitywhoweare.jpg";

const VIsion = () => {
  return (
    <section id="alt-services" className="alt-services">
      <div className="container">
        <div className="row justify-content-around gy-4">
          <div
            className="col-lg-6 img-bg "
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="col-lg-5 d-flex flex-column justify-content-center">
            <h3>Mission Statement</h3>
            <p>
              At Ntsaki Protection, our mission is to provide unparalleled
              security solutions that empower our clients and communities,
              ensuring peace of mind and safety in every aspect of their lives.
            </p>
            <div className="icon-box d-flex position-relative">
              <i className="bi bi-eye flex-shrink-0" />
              <div>
                <h4>
                  <a className="stretched-link">Vision</a>
                </h4>
                <p>
                  Our vision is to be the leading provider of innovative
                  security solutions, setting the highest standards of
                  excellence in the industry.
                </p>
              </div>
            </div>
            {/* End Icon Box */}
            <div className="icon-box d-flex position-relative">
              <i className="bi bi-heart flex-shrink-0" />
              <div>
                <h4>
                  <a className="stretched-link">Values</a>
                </h4>
                <p>
                  Our values include integrity, professionalism, and
                  reliability, guiding every decision and action we take to
                  deliver exceptional service.
                </p>
              </div>
            </div>
            {/* End Icon Box */}
            <div className="icon-box d-flex position-relative">
              <i className="bi bi-award flex-shrink-0" />
              <div>
                <h4>
                  <a className="stretched-link">Philosophies</a>
                </h4>
                <p>
                  Igniting excellence is not just our slogan, it's our
                  philosophy. We constantly strive for innovation, excellence,
                  and continuous improvement in everything we do.
                </p>
              </div>
            </div>
            {/* End Icon Box */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VIsion;
