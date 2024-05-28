import React from "react";
import { motion } from "framer-motion";
import "./contact.css";
import image from "../../assets/images/contact-bg.jpg";
import { Banner, Footer, FAQs, BreadCrumb } from "../../components/components";
import ContactForm from "../../components/ContactForm/ContactForm";
const ContactPage = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}>
      <Banner image={image} title={"Get In Touch"} />
      <BreadCrumb pageName={"Contact us"} />

      <section className="contact">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="info-item  d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-map" />
                <h3>Our Address</h3>
                <p>8778 Masilo, Thokoza, 1426</p>
              </div>
            </div>
            {/* End Info Item */}
            <div className="col-lg-3 col-md-6">
              <div className="info-item d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-envelope" />
                <h3>Email Us</h3>
                <p>contact@example.com</p>
              </div>
            </div>
            {/* End Info Item */}
            <div className="col-lg-3 col-md-6">
              <div className="info-item  d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-telephone" />
                <h3>Call Us</h3>
                <p>011 860 0056 / 078 460 6540</p>
              </div>
            </div>
            {/* End Info Item */}
          </div>
          <div className="row gy-4 mt-1">
            <div className="col-lg-6 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                frameBorder={0}
                style={{ border: 0, width: "100%", height: 384 }}
                allowFullScreen
              />
            </div>
            <div className="col-lg-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <FAQs />
      <Footer />
    </motion.div>
  );
};

export default ContactPage;
