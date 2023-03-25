import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { Tooltip } from "react-tooltip";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Raman Davidovich
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.facebook.com/roman.davidovich.9/"
          target="_blank"
          className="tooltip_footer"
          data-tooltip-content="Facebook"
          data-tooltip-delay-show={500}
          data-tooltip-variant="dark"
        >
          <FaFacebookF alt="Facebook icon" />
        </a>
        <a
          href="https://www.instagram.com/gryzzlycruise/"
          target="_blank"
          className="tooltip_footer"
          data-tooltip-content="Instagram"
          data-tooltip-delay-show={500}
          data-tooltip-variant="dark"
        >
          <FiInstagram alt="Instagram icon" />
        </a>
        <a
          href="https://twitter.com/RoDavidovich"
          target="_blank"
          className="tooltip_footer"
          data-tooltip-content="Twitter"
          data-tooltip-delay-show={500}
          data-tooltip-variant="dark"
        >
          <IoLogoTwitter alt="Twitter icon" />
        </a>
        <Tooltip anchorSelect=".tooltip_footer" />
      </div>

      <div className="footer__copyright">
        <small>{new Date().getFullYear()} &copy; All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
