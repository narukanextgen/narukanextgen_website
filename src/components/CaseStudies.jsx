import RightArrowIcon from "../assets/right-arrow.svg?react";
import { caseStudies } from "../data/caseStudies";

function CaseStudies() {
  return (
    <div
      id="case-studies"
      className="bg-gray-100 flex flex-col items-center px-5 lg:px-28 font-inter pb-16 lg:pb-24 max-w-screen"
    >
      <hr className="h-2 w-20 bg-gradient-to-r from-darkPurple to-coralPink mb-6 mt-24" />

      <h3 className="text-4xl md:leading-[55px] font-normal text-center mb-24">
        Our recent <br />
        <span className="font-bold"> Case studies</span>
      </h3>

      {caseStudies.map((study, i) => (
        <div
          key={i}
          className="w-full lg:h-[26rem] flex flex-col lg:flex-row bg-[#F1F2FF] rounded-2xl mb-12"
        >
          <img
            src={study.image}
            alt="Case study 1"
            className="grow-1 lg::grow-0 shrink-0 lg:h-full"
          />
          <div className="px-5 lg:px-16 pt-5 lg:pt-20">
            <h3 className="text-xl md:text-3xl font-normal mb-5 lg:mb-10">
              {study.title}
            </h3>
            <p className="text-textGray text-sm md:text-lg lg-text-sm mb-16">
              {study.description}
            </p>
            <div className="flex justify-end items-center text-sm">
              <span className="flex gap-2 justify-end items-center bg-clip-text bg-gradient-to-r from-darkPurple to-coralPink text-transparent font-medium">
                Read more <RightArrowIcon className="text-[#A7337D] w-3" />
              </span>
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-center md:justify-end items-center text-xl w-full">
        <span className="flex gap-2 justify-end items-center bg-clip-text bg-gradient-to-r from-darkPurple to-coralPink text-transparent font-medium">
          Read more case studies{" "}
          <RightArrowIcon className="text-[#A7337D] w-3" />
        </span>
      </div>
    </div>
  );
}

export default CaseStudies;
