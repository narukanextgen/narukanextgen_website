import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { articles } from "../data/news";
import Effect from "./Effect";

function NewsCard({ imgUrl, headline }) {
  return (
    <div className="mx-5 md:px-5 lg:pt-5 group flex flex-col items-start md:h-60 lg:h-[21rem] cursor-pointer">
      <img
        src={imgUrl}
        alt=""
        className="rounded-2xl group-hover:scale-110 group-hover:shadow-all"
      />
      <p className="uppercase md:text-xs lg:text-sm text-gray-400 font-semibold md:mt-2 lg:mt-5">
        headline
      </p>
      <h3 className="md:text-sm lg:text-lg font-semibold md:mt-1 lg:mt-2">
        {headline}
      </h3>
      <button className="text-sm text-indigo font-semibold mt-auto">
        Read More
      </button>
    </div>
  );
}

function NewsCarousel() {
  let sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen font-montserrat">
      <div className="mb-16 mt-10 lg:mb-20">
        <h2 className="text-2xl md:text-4xl lg:text-heading leading-[1.4] px-32 text-center font-extrabold">
          News and Updates
        </h2>
        <div className="flex justify-center">
          <Effect className="mt-5 lg:mt-10" />
        </div>
        <p className="text-center px-5 md:px-10 text-base lg:px-32 mt-10">
          Stay updated with the latest news, important announcements, and
          groundbreaking innovations from Naruka NextGen InfoTech as we continue
          to lead the way in delivering cutting-edge digital solutions, driving
          industry growth, and shaping the future of technology.
        </p>
      </div>
      <Slider {...settings}>
        {articles.map((article, index) => (
          <NewsCard
            key={index}
            imgUrl={article.image}
            headline={article.headline}
          />
        ))}
      </Slider>
    </div>
  );
}

export default NewsCarousel;
