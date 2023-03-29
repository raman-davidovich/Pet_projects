import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { Tooltip } from "react-tooltip";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active tooltip_nav" : "tooltip_nav"}
        data-tooltip-content="Home"
        data-tooltip-delay-show={500}
        data-tooltip-variant="info"
      >
        <AiOutlineHome alt="Home section icon" />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={
          activeNav === "#about" ? "active tooltip_nav" : "tooltip_nav"
        }
        data-tooltip-content="About me"
        data-tooltip-delay-show={500}
        data-tooltip-variant="info"
      >
        <AiOutlineUser alt="About section icon" />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={
          activeNav === "#experience" ? "active tooltip_nav" : "tooltip_nav"
        }
        data-tooltip-content="Experience"
        data-tooltip-delay-show={500}
        data-tooltip-variant="info"
      >
        <BiBook alt="Experience section icon" />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={
          activeNav === "#services" ? "active tooltip_nav" : "tooltip_nav"
        }
        data-tooltip-content="Services"
        data-tooltip-delay-show={500}
        data-tooltip-variant="info"
      >
        <RiServiceLine alt="Services section icon" />
      </a>
      <a
        href="#contacts"
        onClick={() => setActiveNav("#contacts")}
        className={
          activeNav === "#contacts" ? "active tooltip_nav" : "tooltip_nav"
        }
        data-tooltip-content="Contacts"
        data-tooltip-delay-show={500}
        data-tooltip-variant="info"
      >
        <BiMessageSquareDetail alt="Contacts section icon" />
      </a>
      <Tooltip anchorSelect=".tooltip_nav" />
    </nav>
  );
};

export default Nav;
