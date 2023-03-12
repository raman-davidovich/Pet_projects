import React, { useRef } from "react";
import "./contacts.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { SlCallOut } from "react-icons/sl";
import emailjs from "emailjs-com";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_sddmczb", "1", form.current, "s3BmCrgK5WCJIT4cG");

    e.target.reset();
  };

  return (
    <section id="contacts">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contacts__container">
        <div className="contacts__options">
          <article className="contacts__option">
            <MdOutlineEmail className="contacts__option-icon" />
            <h4>Email</h4>
            <h5>raman.davidovich@gmail.com</h5>
            <a href="mailto:raman.davidovich@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contacts__option">
            <FaTelegramPlane className="contacts__option-icon" />
            <h4>Telegram</h4>
            <h5>Raman Davidovich</h5>
            <a href="https://telegram.me/Raman_Davidovich" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contacts__option">
            <SlCallOut className="contacts__option-icon" />
            <h4>Phone Call</h4>
            <h5>+375(29) 328-47-97</h5>
            <a href="tel:+375293284797" target="_blank">
              Make a call
            </a>
          </article>
          {/* END OF CONTACT OPTIONS */}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
