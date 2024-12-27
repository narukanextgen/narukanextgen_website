import React from "react";
import heroImage from "../assets/hero-image.png";

function Landing() {
  return (
    <div className="h-screen flex items-center justify-center font-inter relative pt-14">
      <div className="w-4/5 flex h-4/5 items-center md:flex-row flex-col">
        <div>
          <h2 className="text-[3rem] leading-[4rem] font-[200]">
            Great{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#C75CA9] to-[#B981C0]">
              Product
            </span>{" "}
            is <br />
            <span className="font-[750]">built by great</span>{" "}
            <span className="font-[750] text-transparent bg-clip-text bg-gradient-to-tr from-[#8E68C2] to-[#B567A3]">
              teams
            </span>
          </h2>
          <p className="text-textGray mt-8 leading-[2rem] text-xl">
            We help build and manage a team of world class developers <br /> to
            bring your vision to life
          </p>
          <button className="bg-[#3D63EA] px-7 py-4 rounded-md text-white mt-12 text-base">
            Let's get started!
          </button>
        </div>
        <img src={heroImage} alt="Hero Image" />
      </div>
      <span className="w-20 h-10 bg-gradient-to-tr from-[#851D7D] to-[#D8527F] absolute bottom-0 left-1/3 rounded-t-full"></span>
    </div>
  );
}

export default Landing;
