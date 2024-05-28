import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Topbar = () => {
  return (
    <div className="header_top ">
      <div className="container-fluid">
        <div className="contact_link-container">
          <Link href="#" className="contact_link1">
            <div
              className="fs-7 text-decoration-none d-flex align-items-center"
              style={{ color: "#fff" }}>
              <i className="bi bi-geo-fill" style={{ fontSize: "20px" }} />
              <span className="ms-2 fs-7">8778 Masilo, Thokoza, 1426 </span>
            </div>
          </Link>
          <Link href="#" className="contact_link2">
            <div
              className="fs-7 text-decoration-none d-flex align-items-center"
              style={{ color: "#fff" }}>
              <i
                className="bi bi-telephone-fill"
                style={{ fontSize: "20px" }}
              />
              <span className="ms-2 fs-7">011 860 0056 • 078 460 6540</span>
            </div>
          </Link>
          <Link href="#" className="contact_link3">
            <div
              className="fs-7 text-decoration-none d-flex align-items-center"
              style={{ color: "#fff" }}>
              <i className="bi bi-envelope-fill" style={{ fontSize: "20px" }} />
              <span className="ms-2 fs-7">demo@gmail.com</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
