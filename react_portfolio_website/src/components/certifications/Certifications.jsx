import React from "react";
import "./certifications.css";
import Certificat1 from "../../assets/TeachMeSkills.jpg";
import Certificat2 from "../../assets/Skyeng.jpg";

// import Swiper core and required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const data = [
  {
    picture: Certificat1,
    title: "Front End Developer at TeachMeSkills",
    skills:
      "GitHub · Front-End Development · Tailwind CSS · HTML · Redux.js · React.js · TypeScript · Cascading Style Sheets (CSS) · Git · HTML5 · JavaScript",
  },
  {
    picture: Certificat2,
    title: "General Engligh (Intermediate) at Skyeng",
    skills: "Spoken English · English",
  },
];

const Certifications = () => {
  const screenWidth = window.innerWidth;
  return (
    <section id="certifications">
      <h5>Knowledge confirmation</h5>
      <h2>Licences & certifications</h2>

      <Swiper
        className="container certifications__container"
        //install Swiper modules
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={screenWidth > 800 ? 2 : 1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          slideShadows: false,
        }}
        modules={
          screenWidth > 800
            ? [Autoplay, EffectCoverflow, Pagination]
            : [Autoplay, Pagination]
        }
        spaceBetween={screenWidth > 800 ? 0 : 40}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
      >
        {data.map(({ picture, title, skills }, index) => {
          return (
            <SwiperSlide key={index} className="certificat">
              <div className="certificat__picture">
                <img src={picture} alt={`Photo of certificate ${title}`} />
              </div>
              <h3 className="certificat__title">{title}</h3>
              <small className="certificat__skills">Skills: {skills}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Certifications;
