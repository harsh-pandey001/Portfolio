import React from "react";
import "./testimonial.css";
import av1 from "../../assets/avatar1.jpg";
import av2 from "../../assets/avatar2.jpg";
import av3 from "../../assets/avatar3.jpg";
import av4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data = [
  {
    avatar: av1,
    name: "jason",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quidem sed vel alias accusamus necessitatibus praesentium. Beatae, at possimus! Ab, debitis sapiente! Cumque hic nostrum quae itaque architecto iste ducimus!",
  },
  {
    avatar: av2,
    name: "rock",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quidem sed vel alias accusamus necessitatibus praesentium. Beatae, at possimus! Ab, debitis sapiente! Cumque hic nostrum quae itaque architecto iste ducimus!",
  },
  {
    avatar: av3,
    name: "harsh",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quidem sed vel alias accusamus necessitatibus praesentium. Beatae, at possimus! Ab, debitis sapiente! Cumque hic nostrum quae itaque architecto iste ducimus!",
  },
  {
    avatar: av4,
    name: "passion",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quidem sed vel alias accusamus necessitatibus praesentium. Beatae, at possimus! Ab, debitis sapiente! Cumque hic nostrum quae itaque architecto iste ducimus!",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial__container"
       // install Swiper modules
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review},index)=>{
            return(
              <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={avatar}/>
          </div>
          <h5 className="client__name">{name}</h5>
          <small className="client__review">
           {review}
          </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  );
};

export default Testimonial;
