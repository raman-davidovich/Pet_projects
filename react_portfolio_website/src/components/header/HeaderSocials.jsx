import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/raman-davidovich" target="_blank">
        <BsLinkedin alt="Linkedin icon" />
      </a>
      <a href="https://github.com/raman-davidovich" target="_blank">
        <FaGithub alt="Github icon" />
      </a>
      <a href="https://twitter.com/RoDavidovich" target="_blank">
        <FaTwitter alt="Twitter icon" />
      </a>
    </div>
  );
};

export default HeaderSocials;
