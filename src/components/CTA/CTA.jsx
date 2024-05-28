import React from "react";
import "./CTA.css";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section id="call-to-action" className="call-to-action">
      <div className="container cta-content">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h3>Get In Touch</h3>
            <p>
              Ready to take your security skills to the next level? Whether
              you're an aspiring security professional or a company looking to
              enhance your team's capabilities, we're here to help. Reach out to
              us today to discover affordable training options tailored to your
              needs.
            </p>
            <Link
              className="btn btn-outline-light "
              style={{
                borderRadius: "3px",
                alignSelf: "center",
                // fontStyle: "oblique",
                fontWeight: "bold",
                padding: "10px 40px",
              }}
              to="/contact">
              Contact Us Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
