import Effect from "./Effect";
import { CirclePlay } from "lucide-react";
import bannerBg from "../assets/Background.png";
import thumbnail from "../assets/thumbnail.png";
import spiralBall from "../assets/effects/spiral-ball.png";
import ballCone from "../assets/effects/ball-cone.png";
import halo from "../assets/effects/halo.png";

function Banner() {
  return (
    <div className="lg:px-[10%] md:px-10 px-5 font-montserrat pt-10 md:pt-12 lg:pt-24">
      <div
        className="h-[50vh] flex flex-col items-center justify-around gap-20 md:block rounded-3xl md:h-80 lg:h-[70vh] bg-clip-padding bg-no-repeat bg-cover bg-top md:bg-[length:100%] relative w-full"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <h2 className="md:leading-heading font-extrabold text-3xl md:text-4xl lg:text-6xl relative md:absolute md:bottom-5 max-md:pt-16 lg:-bottom-7 md:left-10 md:w-1/2 text-center">
          Making the public markets work for all people.
          <div className="w-full flex justify-center md:justify-start">
            <Effect className="mt-2 md:mt-5 lg:mt-8" />
          </div>
        </h2>
        <span className="flex w-1/2 md:w-48 lg:w-2/5 aspect-[171/100] md:absolute md:bottom-5 lg:-bottom-7 -right-3 md:-right-5 lg:-right-20">
          <span
            className="flex w-full h-full  bg-center bg-cover bg-no-repeat rounded-3xl items-center justify-center"
            style={{ backgroundImage: `url(${thumbnail})` }}
          >
            <CirclePlay className="text-white w-8 h-8 md:w-16 md:h-16 lg:w-28 lg:h-28" />
          </span>
        </span>
        <img
          src={spiralBall}
          alt=""
          className="absolute -right-2 md:-right-10 lg:-right-32 top-1/2 md:-translate-y-1/2 w-20 md:w-32 lg:w-fit hover:scale-110 transition-transform duration-300 ease-in-out"
        />
        <img
          src={ballCone}
          alt=""
          className="absolute left-0 -top-5 md:top-0 w-20 md:w-32 lg:w-fit"
        />
        <img
          src={halo}
          alt=""
          className="absolute w-20 md:w-28 lg:w-fit left-8 md:left-12 -top-8 md:-top-8 lg:-top-20"
        />
        <img
          src={halo}
          alt=""
          className="absolute w-20 md:w-28 lg:w-fit right-8 md:right-5 lg:-right-16 top-1/2 md:top-5 lg:top-0"
        />
      </div>
    </div>
  );
}

export default Banner;
