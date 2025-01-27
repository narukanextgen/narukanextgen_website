import background from "../assets/values-bg.jpg";
import value1 from "../assets/values/value-1.png";
import value2 from "../assets/values/value-2.png";
import value3 from "../assets/values/value-3.png";
import Effect from "./Effect";

function Values() {
  return (
    <div className="w-full flex flex-col md:flex-row mt-32 px-5 md:px-10 lg:px-32 justify-center font-montserrat">
      <div className="md:w-3/12 flex flex-col max-md:gap-5 justify-around">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-heading md:leading-tight font-extrabold ">
            Our Values
          </h2>
          <div className="flex w-full justify-start">
            <Effect className="mt-5 lg:mt-10" />
          </div>
        </div>
        <div className="md:text-base lg:text-lg leading-para">
          <h5 className="font-extrabold md:text-lg lg:text-xl">
            Our Core Principles
          </h5>
          <p className="mt-5 text-slate-600">
            We believe in innovation, integrity and excellence, driving
            impactful solutions for businesses worldwide
          </p>
        </div>
      </div>
      <div className="grow relative max-md:space-y-5">
        <div
          className="bg-cover bg-center bg-clip-border w-full h-full md:w-80 md:h-80 lg:w-[32rem] lg:h-[32rem] rounded-full flex justify-center items-center mt-5 md:mb-44 lg:ml-8"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="w-[calc(100%-2rem)] h-[calc(100%-2rem)] md:w-72 md:h-72 lg:w-[30rem] lg:h-[30rem] bg-white rounded-full">
            <div
              className="bg-cover bg-center bg-clip-text w-full h-full flex justify-center items-center"
              style={{ backgroundImage: `url(${background})` }}
            >
              <p className="text-6xl max-md:py-24 md:text-5xl lg:text-[6rem] leading-tight text-center font-extrabold text-transparent">
                3 Key Values
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full flex flex-col items-center justify-center lg:gap-3 shadow-all p-10 md:absolute -top-44 left-1/3 bg-white">
          <img src={value1} alt="" />
          <div className="md:text-sm lg:text-lg leading-para text-center">
            <h5 className="font-extrabold md:text-base lg:text-xl">
              Innovation
            </h5>
            <p className="lg:mt-5 text-slate-600">
              Driving creative and impactful solutions
            </p>
          </div>
        </div>
        <div className="md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full flex flex-col items-center justify-center lg:gap-3 shadow-all p-10 md:absolute bottom-0 left-1/3 bg-white">
          <img src={value2} alt="" />
          <div className="md:text-sm lg:text-lg leading-para text-center">
            <h5 className="font-extrabold md:text-base lg:text-xl">
              Integrity
            </h5>
            <p className="lg:mt-5 text-slate-600">
              Building trust through transparency.
            </p>
          </div>
        </div>
        <div className="md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full flex flex-col items-center justify-center lg:gap-3 shadow-all p-10 md:absolute right-0 top-1/3 md:-translate-y-1/2 bg-white">
          <img src={value3} alt="" />
          <div className="md:text-sm lg:text-lg leading-para text-center">
            <h5 className="font-extrabold md:text-base lg:text-xl">
              Excellence
            </h5>
            <p className="lg:mt-5 text-slate-600">
              Striving for unmatched quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Values;
