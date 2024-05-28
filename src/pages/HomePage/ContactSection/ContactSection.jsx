import React from "react";
import "./ContactSection.css";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";

const ContactSection = () => {
  return (
    <section id="contact" className="contact contactSection alt-services">
      <div className="container">
        <div className="section-header">
          <span>Our Training Facilities.</span>
          <h3
            style={{
              // color: "#52565e",
              fontWeight: "600",
              textTransform: "uppercase",
            }}>
            Our Training Facilities
          </h3>
        </div>
        <div className="maps-section">
          <input type="radio" className="hidden" name="facility" id="card1" />
          <input
            type="radio"
            className="hidden"
            name="facility"
            id="card2"
            defaultChecked
          />

          <div className="card-selector">
            <label htmlFor="card1" className="card card1">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-5 d-flex align-items-stretch">
                  <div className="info">
                    <div className="address">
                      <i className="bi bi-geo-alt" />
                      <h4>Location:</h4>
                      <p>8878 Masilo Street, Thokoza Gardens, 1426</p>
                    </div>
                    <div className="email">
                      <i className="bi bi-envelope" />
                      <h4>Email:</h4>
                      <p>info@example.com</p>
                    </div>
                    <div className="phone">
                      <i className="bi bi-phone " />
                      <h4>Call:</h4>
                      <p>011 860 0056</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 mt-5 mt-lg-0 d-flex">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                    frameBorder={0}
                    style={{ border: 0, width: "100%", height: 290 }}
                    allowFullScreen
                  />
                </div>
              </div>
            </label>

            <label htmlFor="card2" className="card card2">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-5 d-flex align-items-stretch">
                  <div className="info">
                    <div className="address">
                      <i className="bi bi-geo-alt" />
                      <h4>Location:</h4>
                      <p>Khuluse street, Twala section, Katlehong 1431</p>
                    </div>
                    <div className="email">
                      <i className="bi bi-envelope" />
                      <h4>Email:</h4>
                      <p>info@example.com</p>
                    </div>
                    <div className="phone">
                      <i className="bi bi-phone" />
                      <h4>Call:</h4>
                      <p>078 460 6540</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 mt-5 mt-lg-0 d-flex">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                    frameBorder={0}
                    style={{ border: 0, width: "100%", height: 290 }}
                    allowFullScreen
                  />
                </div>
              </div>
            </label>
          </div>
        </div>

        <div className="mobile-carousel">
          <Carousel
            slideSize="80%"
            height={500}
            slideGap="-40px"
            withControls={false}
            dragFree
            align="center"
            withIndicators>
            <Carousel.Slide>
              <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt" />
                    <h4>Location:</h4>
                    <p>8878 Masilo Street, Thokoza Gardens, 1426</p>
                  </div>
                  <div className="email">
                    <i className="bi bi-envelope" />
                    <h4>Email:</h4>
                    <p>info@example.com</p>
                  </div>
                  <div className="phone">
                    <i className="bi bi-phone" />
                    <h4>Call:</h4>
                    <p>011 860 0056</p>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                    frameBorder={0}
                    style={{ border: 0, width: "100%", height: 290 }}
                    allowFullScreen
                  />
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt" />
                    <h4>Location:</h4>
                    <p>Khuluse street, Twala section, Katlehong 1431</p>
                  </div>
                  <div className="email">
                    <i className="bi bi-envelope" />
                    <h4>Email:</h4>
                    <p>info@example.com</p>
                  </div>
                  <div className="phone">
                    <i className="bi bi-phone" />
                    <h4>Call:</h4>
                    <p>078 460 6540</p>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                    frameBorder={0}
                    style={{ border: 0, width: "100%", height: 290 }}
                    allowFullScreen
                  />
                </div>
              </div>
            </Carousel.Slide>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
