import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Users and product research.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Setting up information architecture to identify buyer persona.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating wireframes and user flows.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating prototypes and improve them with new data.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Handling visual design .</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Selection and registration of a domain and hosting for the site.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Refinement and updating of websites.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Crossbrowser compatibility.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Refactoring and optimization of current functionality.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Image editing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Accessibility.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Search engine optimisation.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Research.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Placement.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Publication.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Promotion.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
