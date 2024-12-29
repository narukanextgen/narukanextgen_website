import React from "react";

function Hiring() {
  return (
    <div className="w-full box-border px-5 lg:px-28 font-inter pb-20 lg:pb-0 mb-20">
      <div className="bg-gray-100 h-56 flex md:flex-row flex-col items-center justify-around rounded-xl px-10 lg:px-0">
        <h2 className="text-lg md:text-2xl lg:text-4xl font-bold">
          Hire the best developers and <br className="hidden lg:inline" />{" "}
          designers around!
        </h2>
        <span>
          <button className="bg-gradient-to-bl from-[#FFC656] to-[#F16063] text-white font-bold text-lg rounded-md py-3 px-8">
            Hire Top Developers
          </button>
        </span>
      </div>
    </div>
  );
}

export default Hiring;
