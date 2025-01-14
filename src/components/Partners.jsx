import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import partnerBg from "../assets/partners-bg.jpg";
import { partnerImages } from "../data/partnerImages";

function Partners() {
  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 10,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
        },
      },
    ],
  };

  return (
    <div className="px-5 md:px-10 pt-16 md:pt-24 lg:pt-32 lg:px-32 relative">
      <div
        className="bg-no-repeat bg-center w-full bg-cover rounded-3xl md:rounded-4xl"
        style={{ backgroundImage: `url(${partnerBg})` }}
      >
        <div className="bg-black/75 w-full h-full rounded-3xl md:rounded-4xl py-10 text-white">
          <h2 className="text-center font-extrabold text-3xl lg:text-6xl">
            Our Partners and Investors
          </h2>
          <p className="text-sm md:text-base lg:text-lg px-5 md:px-10 lg:px-32 text-center mt-5 md:mt-8">
            Trusted partners and visionary investors play a vital role in
            driving innovation, enabling the delivery of transformative digital
            solutions and fostering sustainable growth.
          </p>

          <div className="w-full absolute left-0 overflow-hidden top-[60%] md:top-1/2 ">
            <Slider {...settings}>
              {partnerImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className="px-3 md:px-5 lg:w-20 lg:px-10"
                />
              ))}
            </Slider>
          </div>

          <div className="flex w-full justify-around mt-32 md:mt-36 lg:mt-52">
            <p className="text-xl md:text-2xl lg:text-5xl font-extrabold flex flex-col items-center text-white">
              <span className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-cyan-electric to-cyan-electric/6">
                123
              </span>
              Investors
              <span className="h-3 w-20 bg-cyan-electric rounded-full mt-3 md:mt-5 lg:mt-10"></span>
            </p>
            <p className="text-xl md:text-2xl lg:text-5xl font-extrabold flex flex-col items-center text-white">
              <span className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-indigo to-indigo/6">
                $123M
              </span>
              Funded
              <span className="h-3 w-20 bg-indigo rounded-full mt-3 md:mt-5 lg:mt-10"></span>
            </p>
            <p className="text-xl md:text-2xl lg:text-5xl font-extrabold flex flex-col items-center text-white">
              <span className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-cyan-electric to-cyan-electric/6">
                456
              </span>
              Partners
              <span className="h-3 w-20 bg-cyan-electric rounded-full mt-3 md:mt-5 lg:mt-10"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
