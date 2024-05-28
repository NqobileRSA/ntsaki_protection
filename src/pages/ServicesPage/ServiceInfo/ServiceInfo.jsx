import React from "react";
import "./ServiceInfo.css";
import image from "../../../assets/images/blackwalky.jpg";

const serviceItems = [
  {
    icon: "bi bi-shield-lock",
    title: "Security Officer Training",
    description:
      "Our security officer training programs cover a wide range of topics including security protocols, emergency response, conflict resolution, and more.",
  },
  {
    icon: "bi bi-award",
    title: "Certification Courses",
    description:
      "Gain industry-recognized certifications through our specialized courses, ensuring you have the credentials needed to succeed in the security field.",
  },
  // {
  //   icon: "bi bi-person-check",
  //   title: "Personal Protection Training",
  //   description:
  //     "Learn techniques for personal protection, threat assessment, and risk management to safeguard yourself and others in various situations.",
  // },
  {
    icon: "bi bi-people",
    title: "Team Security Training",
    description:
      "Enhance the effectiveness of your security team with our specialized training programs tailored to group dynamics and coordination.",
  },
];

const ServiceInfo = () => {
  return (
    <section id="alt-services-2" className="alt-services ">
      <div className="container">
        <div className="row justify-content-around gy-4">
          <div className="col-lg-5 d-flex flex-column justify-content-center">
            <h3>Comprehensive Training Solutions</h3>
            <p>
              At Ntsaki Protection, we offer comprehensive training solutions
              designed to equip individuals and organizations with the knowledge
              and skills necessary to excel in the security industry.
            </p>
            {serviceItems.map((item, index) => (
              <div key={index} className="icon-box d-flex position-relative">
                <i className={`${item.icon} flex-shrink-0`} />
                <div>
                  <h4>
                    <a href="#" className="stretched-link">
                      {item.title}
                    </a>
                  </h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div
            className="col-lg-6 img-bg "
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceInfo;
