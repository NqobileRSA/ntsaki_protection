import React from "react";
import "./ContactForm.css";
const ContactForm = () => {
  return (
    <div className="contact">
      <form
        action="forms/contact.php"
        method="post"
        role="form"
        className="php-email-form">
        <div className="row gy-4">
          <div className="col-lg-6 form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="col-lg-6 form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="subject"
            id="subject"
            placeholder="Subject"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            name="message"
            rows={5}
            placeholder="Message"
            required
            defaultValue={""}
          />
        </div>
        <div className="my-3">
          <div className="loading">Loading</div>
          <div className="error-message" />
          <div className="sent-message">
            Your message has been sent. Thank you!
          </div>
        </div>
        <div className="text-center">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
