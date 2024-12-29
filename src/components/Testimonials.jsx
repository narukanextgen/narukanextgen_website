import workGroupImage from "../assets/work-group-image.png";
import logo1 from "../assets/logos/logo1.png";
import logo2 from "../assets/logos/logo2.png";
import logo3 from "../assets/logos/logo3.png";
import logo4 from "../assets/logos/logo4.png";
import logo5 from "../assets/logos/logo5.png";
import logo6 from "../assets/logos/logo6.png";
import logo7 from "../assets/logos/logo7.png";
import LeftArrowIcon from "../assets/left-arrow.svg?react";
import RightArrowIcon from "../assets/right-arrow.svg?react";

function Testimonials() {
  return (
    <>
      <div className="font-inter w-full">
        <span className="block w-20 h-10 rounded-b-full bg-gradient-to-tr from-darkPurple to-coralPink ml-40"></span>
        <div className="w-full flex flex-col lg:flex-row lg:h-[30rem] items-center justify-between lg:px-20 px-5 gap-10 my-20 lg:my-40">
          <div className="w-full lg:w-1/2 h-full grow-0 flex flex-col gap-10 justify-between">
            <span>
              <hr className="h-2 w-20 bg-gradient-to-r from-darkPurple to-coralPink mb-6" />
              <h3 className="text-4xl lg:leading-[55px] font-normal">
                Leading companies trust us <br />
                <span className="font-bold"> to develop software</span>
              </h3>
            </span>
            <p className="text-sm md:leading-9 md:text-xl text-textGray">
              We{" "}
              <span className="text-[#a7337d]">add development capacity</span>{" "}
              to tech teams. Our value isn’t <br className="hidden lg:inline" />{" "}
              limited to building teams but is equally distributed across the{" "}
              <br className="hidden lg:inline" /> project lifecycle. We are a
              custom software development <br className="hidden lg:inline" />{" "}
              company that guarantees the successful delivery of your{" "}
              <br className="hidden lg:inline" /> project
            </p>
            <span className="mb-10 text-sm md:text-lg text-darkPurple flex items-center gap-2">
              See more Information
              <RightArrowIcon />
            </span>
          </div>
          <div className="lg:h-full">
            <img
              src={workGroupImage}
              alt="Team around office table"
              className="lg:h-full"
            />
          </div>
        </div>
        <span className="p-5 lg:pl-20 flex flex-col">
          <hr className="h-2 w-20 bg-gradient-to-r from-darkPurple to-coralPink mb-6" />
          <h3 className="text-4xl lg:leading-[55px] font-normal">
            Meet the People <br />{" "}
            <span className="font-bold">We are Working With</span>
          </h3>
        </span>
        <span className="flex justify-end pr-5 lg:pr-20 gap-5">
          <button className="w-10 h-10 border-2 border-darkPurple rounded-full flex justify-center items-center">
            <LeftArrowIcon className="fill-darkPurple" />
          </button>
          <button className="w-10 h-10 border-2 border-darkPurple bg-darkPurple rounded-full flex justify-center items-center">
            <RightArrowIcon className="text-white" />
          </button>
        </span>
        <span className="block w-20 h-10 rounded-t-full bg-gradient-to-tr from-darkPurple to-coralPink ml-[50%]"></span>
        <div className="w-full flex items-center flex-wrap justify-around lg:justify-between px-5 py-3 bg-gray-200">
          <img src={logo1} alt="logo1" />
          <img src={logo2} alt="logo1" />
          <img src={logo3} alt="logo1" />
          <img src={logo4} alt="logo1" />
          <img src={logo5} alt="logo1" />
          <img src={logo6} alt="logo1" />
          <img src={logo7} alt="logo1" />
        </div>
      </div>
    </>
  );
}

export default Testimonials;
