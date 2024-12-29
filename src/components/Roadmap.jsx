import trophy from "../assets/trophy.png";

function Roadmap() {
  return (
    <div className="px-5 lg:px-20 pt-10 lg:pb-36 max-w-screen box-border flex flex-col items-center">
      <hr className="h-2 w-20 bg-gradient-to-r from-darkPurple to-coralPink mb-6 mt-20" />
      <h3 className="text-4xl md:leading-[55px] font-normal text-center mb-20">
        Our design and <br />
        <span className="font-bold"> development approach</span>
      </h3>
      <div className="relative w-full lg:h-60 lg:mb-20 flex flex-col gap-5 items-center lg:block p-5 md:px-20 lg:p-0">
        <hr className="w-11/12 h-[3px] bg-red-400 absolute left-[3%] m-0 bottom-0 hidden lg:block" />
        <div className="w-full lg:w-64 border-2 border-gray-200 rounded-lg lg:absolute left-[calc(25%-2rem)] bottom-10 lg:-translate-x-1/2 px-2 py-3 md:px-5 md:py-5 md:text-xl lg:px-2 lg:py-3 lg:text-base">
          <span className="font-bold">
            <h4>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-darkPurple to-coralPink">
                #1
              </span>{" "}
              Assemble the right team
            </h4>
          </span>
          <p className="text-sm md:text-lg lg:text-sm md:mt-2 text-textGray">
            We handle all aspects of vetting and choosing the right team that
            you don't have the time, expertise, or desire to do.
          </p>
        </div>
        <hr className="h-8 w-[3px] bg-red-400 lg:absolute left-[calc(25%-2rem)] -bottom-0" />
        <div className="w-full lg:w-64 border-2 border-gray-200 rounded-lg lg:absolute left-[calc(25%+2rem)] -bottom-10 lg:translate-y-full lg:-translate-x-1/2 px-2 py-3 md:px-5 md:py-5 lg:px-2 lg:py-3 md:text-xl lg:text-base">
          <span className="font-bold">
            <h4>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-darkPurple to-coralPink">
                #2
              </span>{" "}
              Sprint planning
            </h4>
          </span>
          <p className="text-sm md:text-lg lg:text-sm md:mt-2 text-textGray">
            We handle all aspects of vetting and choosing the right team that
            you don't have the time, expertise, or desire to do.
          </p>
        </div>
        <hr className="h-8 w-[3px] bg-red-400 lg:absolute left-[calc(25%+2rem)] -bottom-8" />
        {/* Tech architecture */}
        <div className="w-full lg:w-64 border-2 border-gray-200 rounded-lg lg:absolute left-[calc(50%-2rem)] bottom-10 lg:-translate-x-1/2 px-2 py-3 md:px-5 md:py-5 lg:px-2 lg:py-3 md:text-xl lg:text-base">
          <span className="font-bold">
            <h4>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-darkPurple to-coralPink">
                #3
              </span>{" "}
              Tech architecture
            </h4>
          </span>
          <p className="text-sm md:text-lg lg:text-sm md:mt-2 text-textGray">
            We handle all aspects of vetting and choosing the right team that
            you don't have the time, expertise, or desire to do.
          </p>
        </div>
        <hr className="h-8 w-[3px] bg-red-400 lg:absolute left-[calc(50%-2rem)] -bottom-0" />
        <div className="w-full lg:w-64 border-2 border-gray-200 rounded-lg lg:absolute left-[calc(50%+2rem)] -bottom-10 lg:translate-y-full lg:-translate-x-1/2 px-2 py-3 md:px-5 md:py-5 lg:px-2 lg:py-3 md:text-xl lg:text-base">
          <span className="font-bold">
            <h4>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-darkPurple to-coralPink">
                #4
              </span>{" "}
              Standups & weekly demos
            </h4>
          </span>
          <p className="text-sm md:text-lg lg:text-sm md:mt-2 text-textGray">
            We handle all aspects of vetting and choosing the right team that
            you don't have the time, expertise, or desire to do.
          </p>
        </div>

        <hr className="h-8 w-[3px] bg-red-400 lg:absolute left-[calc(75%+2rem)] -bottom-8" />

        <div className="w-full lg:w-64 border-2 border-gray-200 rounded-lg lg:absolute left-[calc(75%-2rem)] bottom-10 lg:-translate-x-1/2 px-2 py-3 md:px-5 md:py-5 lg:px-2 lg:py-3 md:text-xl lg:text-base">
          <span className="font-bold">
            <h4>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-darkPurple to-coralPink">
                #5
              </span>{" "}
              Code reviews
            </h4>
          </span>
          <p className="text-sm md:text-lg lg:text-sm text-textGray">
            We handle all aspects of vetting and choosing the right team that
            you don't have the time, expertise, or desire to do.
          </p>
        </div>
        <hr className="h-8 w-[3px] bg-red-400 lg:absolute left-[calc(50%+2rem)] -bottom-8" />
        <div className="w-full lg:w-64 border-2 border-gray-200 rounded-lg lg:absolute left-[calc(75%+2rem)] -bottom-10 lg:translate-y-full lg:-translate-x-1/2 px-2 py-3 md:px-5 md:py-5 lg:px-2 lg:py-3 md:text-xl lg:text-base">
          <span className="font-bold">
            <h4>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-darkPurple to-coralPink">
                #6
              </span>{" "}
              Iterative delivery
            </h4>
          </span>
          <p className="text-sm md:text-lg lg:text-sm md:mt-2 text-textGray">
            We handle all aspects of vetting and choosing the right team that
            you don't have the time, expertise, or desire to do.
          </p>
        </div>
        <hr className="h-8 w-[3px] bg-red-400 lg:absolute left-[calc(75%-2rem)] -bottom-0" />
        <img
          src={trophy}
          alt="Trophy"
          className="lg:absolute right-5 bottom-0 translate-y-1/2 w-10"
        />
      </div>
    </div>
  );
}

export default Roadmap;
