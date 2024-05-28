import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const useFullLinks = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/About" },
    { title: "Services", link: "/Services" },
    { title: "Terms of Service", link: "" },
    { title: "Privacy Policy", link: "" },
  ];

  const ourServices = [
    { title: "Security Training", serviceLink: "/Services" },
    { title: "Psira Registration", serviceLink: "/Services" },
    { title: "Psira Renewal", serviceLink: "/Services" },
  ];

  const socials = [
    { title: "WhatsApp", icon: "bi bi-whatsapp", link: "#" },
    { title: "Facebook", icon: "bi bi-facebook", link: "#" },
  ];
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>
                Ntsaki Protection<span>.</span>
              </h3>
              <p>
                Address:
                <br />
                8878 Masilo Street
                <br />
                Thokoza Gardens
                <br />
                1426 <br />
                <br />
                <strong>Phone:</strong>011 860 0056
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                {useFullLinks.map((item, index) => (
                  <li key={index}>
                    <Link to={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                {ourServices.map((service, index) => (
                  <li key={index}>
                    <Link to={service.serviceLink}>{service.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p>Keep in touch with our social networks</p>
              <div className="social-links mt-3">
                {socials.map((social, index) => (
                  <Link key={index} to={social.link}>
                    <i className={social.icon} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="copyright">
          © Copyright{" "}
          <strong>
            <span>Ntsaki Protection</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Developed by <a href="#">Nqobile Ngobeni</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
