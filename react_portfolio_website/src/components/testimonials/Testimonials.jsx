import React from "react";
import "./testimonials.scss";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import testimonialsData from "./constants";

// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Fade } from "react-awesome-reveal";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <SectionTitle>
        <Fade delay={500} direction="down" cascade triggerOnce damping={0.3}>
          <span>Review from clients</span>
          <br />
          <div>Testimonials</div>
        </Fade>
      </SectionTitle>

      <Fade delay={1500} direction="up" triggerOnce>
        <Swiper
          className="container testimonials__container"
          // install Swiper modules
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 30000,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
        >
          {testimonialsData.map(({ avatar, name, review }) => {
            return (
              <SwiperSlide key={name} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={`${name} avatar`} loading="lazy" />
                </div>
                <h3 className="client__name">{name}</h3>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Fade>
    </section>
  );
};

export default Testimonials;
