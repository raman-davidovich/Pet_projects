import React, { useRef } from "react";
import "./contacts.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
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
            <MdOutlineEmail classname="contacts__option-icon" />
            <h4>Email</h4>
            <h5>raman.davidovich@gmail.com</h5>
            <a href="mailto:raman.davidovich@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <div className="contacts__options">
            <article className="contacts__option">
              <RiMessengerLine className="contacts__option-icon" />
              <h4>Messenger</h4>
              <h5>Raman Davidovich</h5>
              <a href="https://m.me/roman.davidovich.9" target="_blank">
                Send a message
              </a>
            </article>
            <article className="contacts__option">
              <BsWhatsapp className="contacts__option-icon" />
              <h4>WhatsApp</h4>
              <h5>+123456789</h5>
              <a
                href="https://api.whatsapp.com/send?phone=+123456789"
                target="_blank"
              >
                Send a message
              </a>
            </article>
          </div>
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
