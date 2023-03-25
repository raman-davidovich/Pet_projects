import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpeg";
import { Tooltip } from "react-tooltip";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "React 3D animation website (iPhone 14 presentation)",
    technologies: "ReactJS, WebGi SDK, ThreeJS, GSAP",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, technologies, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={`${title} screenshot`} />
              </div>
              <h3>{title}</h3>
              <h4>{technologies}</h4>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn tooltip_portfolio"
                  target="_blank"
                  data-tooltip-content="Visit repository"
                  data-tooltip-delay-show={2000}
                  data-tooltip-variant="info"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary tooltip_portfolio"
                  target="_blank"
                  data-tooltip-content="Visit website"
                  data-tooltip-delay-show={2000}
                  data-tooltip-variant="info"
                >
                  Live Demo
                </a>
                <Tooltip anchorSelect=".tooltip_portfolio" />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
