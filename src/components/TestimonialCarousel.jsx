import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "../data/testimonials";
import LeftArrowIcon from "../assets/left-arrow.svg?react";
import RightArrowIcon from "../assets/right-arrow.svg?react";
import leftQuote from "../assets/left-quote.png";
import rightQuote from "../assets/right-quote.png";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

function TestimonialCarousel() {
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className={`arrow ${className}`}
        style={{ ...style }}
      >
        <button className="border-2 border-darkPurple w-5 h-5 lg:w-10 lg:h-10 flex justify-center items-center rounded-full">
          <RightArrowIcon className="text-darkPurple w-2 h-2 lg:w-min lg:h-min" />
        </button>
      </div>
    );
  };
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className={`arrow ${className}`}
        style={{ ...style, zIndex: 1 }}
      >
        <button className="border-2 border-darkPurple w-5 h-5 lg:w-10 lg:h-10 flex justify-center items-center rounded-full">
          <LeftArrowIcon className="fill-darkPurple w-2 h-2 lg:w-min lg:h-min" />
        </button>
      </div>
    );
  };

  const settings = {
    dots: true,
    className: "quote",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    customPaging: function (i) {
      return (
        <a className="flex flex-col items-center">
          <img src={testimonials[i].image} alt="" className="w-20" />
          <span className="w-16 lg:w-24">
            <Rating value={testimonials[i].rating} readOnly={true} />
          </span>
          <p className="lg:font-medium text-xs lg:text-base">
            {testimonials[i].name}
          </p>
          <p className="text-[10px] lg:text-sm text-textGray">
            {testimonials[i].occupation}
          </p>
        </a>
      );
    },
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="flex flex-col items-center font-inter">
      <hr className="h-2 w-20 bg-gradient-to-r from-darkPurple to-coralPink mb-6 mt-20" />
      <h3 className="text-4xl md:leading-[55px] font-normal text-center mb-20">
        Why cutomers love <br />
        <span className="font-bold"> working with us</span>
      </h3>
      <div className="w-full">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <span key={testimonial.name} className="p-2 relative">
              <img
                src={leftQuote}
                alt=""
                className="absolute -left-5 lg:-left-20"
              />
              <p className="text-textGray text-sm lg:text-lg leading-9 text-center">
                {testimonial.quote}
              </p>
              <img
                src={rightQuote}
                alt=""
                className="absolute -right-5 lg:-right-20 bottom-0 "
              />
            </span>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TestimonialCarousel;
