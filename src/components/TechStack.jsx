import React, { useState } from "react";
import { techStack } from "../data/techStack";

function TechStack() {
  const [techValue, setTechValue] = useState("Backend");
  return (
    <div className="flex flex-col items-center lg:px-28 px-5 font-inter max-w-full">
      <hr
        className="h-2 w-20 bg-gradient-to-r from-darkPurple to-coralPink mb-6
      mt-20"
      />
      <h3 className="text-4xl md:leading-[55px] font-normal text-center mb-20">
        Our
        <br />
        <span className="font-bold"> Tech Stack</span>
      </h3>
      <div className="w-full flex flex-col items-center">
        <div className="flex items-center gap-x-5 gap-y-3 md:gap-10 flex-wrap justify-center md:flex-nowrap">
          {techStack.map((tech, i) => (
            <button
              key={i}
              value={tech.domain}
              onClick={(e) => setTechValue(e.target.value)}
              className={`text-sm md:text-lg bg-clip-text font-semibold relative ${
                techValue === tech.domain
                  ? "text-transparent bg-gradient-to-r from-darkPurple to-coralPink before:content-[''] after:absolute after:h-1 after:w-2/5 after:bg-gradient-to-r after:from-darkPurple after:to-coralPink after:rounded-md after:-bottom-2 after:left-1/2 after:-translate-x-1/2"
                  : ""
              }`}
            >
              {tech.domain}
            </button>
          ))}
        </div>
        <div className="w-full h-min flex flex-wrap gap-x-2 gap-y-2 md:gap-x-16 md:gap-y-10 justify-center items-center pt-20 pb-10">
          {techStack
            .find((t) => t.domain === techValue)
            .stack.map((tech, i) => (
              <img
                key={i}
                src={tech.image}
                alt=""
                className={`shrink-0 w-32 md:w-min`}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
