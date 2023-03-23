import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.webp";
import AVTR2 from "../../assets/avatar2.jpeg";
import AVTR3 from "../../assets/avatar3.webp";
import AVTR4 from "../../assets/avatar4.jpeg";

// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Elon Musk",
    review: `As an entrepreneur and innovator, I have worked with countless developers over the years, but I must say that working with Raman has been an absolute pleasure. His exceptional skills in coding, design, and user experience have helped us create some of the most innovative and user-friendly products at SpaceX and Tesla.`,
  },
  {
    avatar: AVTR2,
    name: "Bill Gates",
    review: `Not only was Raman’s work on-time and to spec, he pays attention to improve the aesthetics of the site as well as the functionality. Throughout the entire process he is responsive, and willing to work through issues as they arise. It’s obvious he takes tremendous pride in his work, and I wouldn’t hesitate to recommend or work with him again.`,
  },
  {
    avatar: AVTR3,
    name: "Tim Cook",
    review:
      "Working with Raman was better than expected and we had really high expectations. He is an incredibly talented developer but what really makes him stand out is his work ethic and steady approach. Time after time, and without us asking, he added enhancements and improvements that resulted in a better end product for us and our clients.",
  },
  {
    avatar: AVTR4,
    name: "Mark Zuckerberg",
    review:
      "We have the fortune of working with Raman on a very regular basis. Every single project is done in a timely fashion and is delivered exactly as is outlined. Beyond that, his development skills and expertise make him an invaluable part of our process. We absolutely offer our highest possible recommendation.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Autoplay, Pagination]}
        spaceBetween={40}
        slidesPerview={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
