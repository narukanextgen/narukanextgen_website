import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { resources } from "../data/resources";
import RightArrowIcon from "../assets/right-arrow.svg?react";

function Resources() {
  return (
    <div className="flex flex-col items-center font-inter mb-10">
      <hr className="h-2 w-20 bg-gradient-to-r from-darkPurple to-coralPink mb-6 mt-20" />
      <h3 className="text-4xl md:leading-[55px] font-normal text-center mb-20">
        Featured <br />
        <span className="font-bold">Resources</span>
      </h3>
      <div className="flex w-full justify-between gap-20">
        {resources.map((resource) => (
          <span className="first:w-56 last:w-56 w-64 h-72 flex flex-col">
            <img
              src={resource.image}
              alt=""
              className="grow-0 h-44 shrink-0 mb-5"
            />
            <p className="text-sm text-gray-800">{resource.title}</p>
            <span className="flex justify-end items-center gap-3 mt-auto">
              <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-darkPurple to-coralPink">
                Read More
              </p>
              <RightArrowIcon className="text-magentaPink" />
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Resources;
