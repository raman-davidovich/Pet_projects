import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://linkedin.com/in/raman-davidovich"
        target="_blank"
        className="tooltip_header-socials"
        data-tooltip-content="Linkedin"
        data-tooltip-delay-show={500}
        data-tooltip-variant="info"
        data-tooltip-place="right"
      >
        <BsLinkedin alt="Linkedin icon" />
      </a>
      <a
        href="https://github.com/raman-davidovich"
        target="_blank"
        className="tooltip_header-socials"
        data-tooltip-content="Github"
        data-tooltip-delay-show={500}
        data-tooltip-variant="info"
        data-tooltip-place="right"
      >
        <FaGithub alt="Github icon" />
      </a>
      <a
        href="https://twitter.com/RoDavidovich"
        target="_blank"
        className="tooltip_header-socials"
        data-tooltip-content="Twitter"
        data-tooltip-delay-show={500}
        data-tooltip-variant="info"
        data-tooltip-place="right"
      >
        <FaTwitter alt="Twitter icon" />
      </a>
      <Tooltip anchorSelect=".tooltip_header-socials" />
    </div>
  );
};

export default HeaderSocials;
