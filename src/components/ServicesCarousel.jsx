import Slider from "react-slick";
import { services } from "../data/services";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ServicesCarousel() {
  const settings = {
    dots: true,
    afterChange: (current) => console.log(current),
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    draggable: 500,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen relative flex flex-col items-center bg-gray-100 font-inter">
      <h2 className="text-4xl text-gray-900 font-bold mb-12 mt-16">
        Services we offer
      </h2>
      <div className="w-[calc(100%-80px)] mt-10">
        <Slider {...settings}>
          {services.map((service, index) => (
            <span
              key={index}
              className="md:h-80 !flex flex-col justify-center md:gap-5 md:px-5 p-2 box-border bg-white rounded-md"
            >
              <img
                src={service.image}
                alt="service image"
                className="rounded-full border-2 border-[#A7337D] h-16 w-16 p-2 service-image"
              />
              <h3 className="text-base md:text-2xl bg-clip-text bg-gradient-to-r from-darkPurple to-coralPink text-transparent font-semibold">
                {service.title}
              </h3>
              <p className="text-textGray text-sm md:text-base">
                {service.description}
              </p>
            </span>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ServicesCarousel;
