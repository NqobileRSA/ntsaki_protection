import { useState } from "react";
import { Tabs, rem, Button, Image } from "@mantine/core";
import "./AboutSection.css";
import missionImage from "../../../assets/images/blackSecurity.jpg";
import visionImage from "../../../assets/images/blackSecurity.jpg";
import usImage from "../../../assets/images/blackSecurity.jpg";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("about-us");

  const handleTabChange = (value) => {
    setActiveTab(value);
    console.log(value);
  };

  return (
    <section id="about-hero" className="container">
      <Tabs
        color="gray"
        radius="xs"
        value={activeTab}
        onChange={handleTabChange}>
        <Tabs.List style={{ gap: "50px", marginBottom: "40px" }}>
          <Tabs.Tab
            value="about-us"
            style={{ fontSize: activeTab === "about-us" ? "22px" : "20px" }}>
            About Us
          </Tabs.Tab>
          <Tabs.Tab
            value="Mission-Statement"
            style={{
              fontSize: activeTab === "Mission-Statement" ? "22px" : "20px",
            }}>
            Mission Statement
          </Tabs.Tab>
          <Tabs.Tab
            value="values"
            style={{ fontSize: activeTab === "values" ? "22px" : "20px" }}>
            Values
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="about-us">
          {/* <h4>Who we are.</h4> */}
          <div className="sub-panel">
            <div className="action-center">
              <Image radius="xs" src={usImage} style={{ width: "100%" }} />
            </div>
            <p className="div1">
              Ntsaki Protection is a leading provider of comprehensive security
              training solutions based in Johannesburg, South Africa.
              Established in 2010, we have emerged as a trusted name in the
              industry, dedicated to offering affordable and high-quality
              security training courses to individuals and organizations across
              the country. With a focus on professionalism and excellence, we
              strive to equip our clients with the knowledge and skills
              necessary to succeed in the dynamic field of security services.
            </p>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="Mission-Statement">
          {/* <h4>This is our mission:</h4> */}

          <div className="sub-panel">
            <div className="action-center">
              <Image radius="xs" src={missionImage} style={{ width: "100%" }} />
            </div>
            <p>
              Our mission at Ntsaki Protection is to empower individuals and
              companies with the training and resources they need to enhance
              safety, security, and professionalism in the security industry. We
              are committed to delivering superior-quality training programs
              that meet industry standards and exceed the expectations of our
              clients. Through innovation, integrity, and a relentless pursuit
              of excellence, we aim to make a positive impact on the lives and
              careers of those we serve.
            </p>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="values">
          {/* <h4>Values and Philosophies</h4> */}
          <div className="sub-panel">
            <div className="action-center">
              <Image radius="xs" src={visionImage} style={{ width: "100%" }} />
              <div className="btn-container">
                <Button variant="outline">Get In Touch</Button>
              </div>
            </div>
            <p>
              At Ntsaki Protection, our values are the cornerstone of everything
              we do. Integrity, professionalism, and dedication guide our
              actions as we strive to uphold the highest ethical standards in
              all aspects of our operations. We believe in fostering a culture
              of continuous learning and improvement, embracing innovation and
              adaptability to stay at the forefront of the rapidly evolving
              security landscape. With a commitment to excellence and a passion
              for service, we are dedicated to making a lasting difference in
              the lives of our clients and the communities we serve.
            </p>
          </div>
        </Tabs.Panel>
      </Tabs>
    </section>
  );
};

export default AboutSection;
