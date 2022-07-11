import React from "react";
import "./testimonial.css";
import av1 from '../../assets/avatar1.jpg';
import av2 from '../../assets/avatar1.jpg';
import av3 from '../../assets/avatar1.jpg';
import av4 from '../../assets/avatar1.jpg';


const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <div className="container testimonial__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={av1} alt="connetion error"/>
          </div>
          <h5 className="client__name">Samuals</h5>
            <small className="client__review">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam tempore aut vitae cum delectus quo illum non itaque accusantium dolorem! Itaque dolor in eum consequuntur vero necessitatibus totam atque eius?
            </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={av1} alt="connetion error"/>
          </div>
          <h5 className="client__name">Samuals</h5>
            <small className="client__review">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam tempore aut vitae cum delectus quo illum non itaque accusantium dolorem! Itaque dolor in eum consequuntur vero necessitatibus totam atque eius?
            </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={av1} alt="connetion error"/>
          </div>
          <h5 className="client__name">Samuals</h5>
            <small className="client__review">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam tempore aut vitae cum delectus quo illum non itaque accusantium dolorem! Itaque dolor in eum consequuntur vero necessitatibus totam atque eius?
            </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={av1} alt="connetion error"/>
          </div>
          <h5 className="client__name">Samuals</h5>
            <small className="client__review">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam tempore aut vitae cum delectus quo illum non itaque accusantium dolorem! Itaque dolor in eum consequuntur vero necessitatibus totam atque eius?
            </small>
        </article>
      </div>
    </section>
  );
};

export default Testimonial;
