import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="message icon" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <address>
          <a href="mailto:example@example.com">
            <img src={mail_icon} alt="mail icon" />
            example@example.com
          </a>
          <a href="tel:+1234567890">
            <img src={phone_icon} alt="phone icon" />
            +1 (234) 567-890
          </a>
          <span>
            <img src={location_icon} alt="location icon" />
            Street 1 Cracow 12-345 Poland{" "}
          </span>
        </address>
      </div>
      <div className="contact-col"></div>
    </div>
  );
};

export default Contact;
