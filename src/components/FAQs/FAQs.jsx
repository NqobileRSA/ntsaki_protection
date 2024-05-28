import React from "react";
import { Accordion } from "@mantine/core";
import { faqs } from "../../constants";
import "./FAQs.css";

const FAQs = () => {
  const classes = [
    {
      "&[data-rotate]": {
        transform: "rotate(15deg)",
      },
    },
    {
      icon: {
        width: "16px",
        height: "16px",
      },
    },
  ];

  const items = faqs.map((item, index) => (
    <Accordion.Item key={index} value={item.question}>
      <Accordion.Control>{item.question}</Accordion.Control>
      <Accordion.Panel style={{ marginLeft: "15px" }}>
        {item.answer}
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <section id="faq" className="faq ">
      <div className="container">
        <div className="section-header">
          <span>Frequently Asked Questions</span>
          <h3>Frequently Asked Questions</h3>
        </div>
        <p style={{ textAlign: "center" }}>
          Here are some common questions about Ntsaki Protection and our
          security training courses.
        </p>
        <Accordion
          defaultValue=""
          classNames={{ chevron: classes[0] }}
          chevron={<i className={`bi bi-plus ${classes[1].icon}`} />}>
          {items}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;
