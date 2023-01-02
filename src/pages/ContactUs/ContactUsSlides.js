import React from "react";
import firstSlide from "./CuImg/firstSlide.jpg";
import secondSlide from "./CuImg/secondSlide.jpg";
import thirdSlide from "./CuImg/thirdSlide.jpg";

const ContactUsSlides = () => {

  const slideImg = [thirdSlide,secondSlide,firstSlide]

  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide mb-5 border"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">

        {slideImg.map((val,ind) => {
          return (
            <div className={`carousel-item ${ind === 0 ? "active" : ""} `} data-bs-interval={3000}>
            <img src={val} className="d-block w-100" alt="..." />
          </div>
        )
        })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default ContactUsSlides;
