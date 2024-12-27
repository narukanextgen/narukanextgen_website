import workGroupImage from "../assets/work-group-image.png";

function Testimonials() {
  return (
    <>
      <div className="font-inter w-full">
        <span className="block w-20 h-10 rounded-b-full bg-gradient-to-tr from-darkPurple to-coralPink ml-40"></span>
        <div className="w-full flex flex-col md:flex-row md:h-[30rem] items-center justify-between md:px-20 px-5 gap-10 my-20 md:my-40">
          <div className="w-full md:w-1/2 h-full grow-0 flex flex-col justify-between">
            <span>
              <hr className="h-2 w-20 bg-gradient-to-r from-darkPurple to-coralPink mb-6" />
              <h3 className="text-4xl md:leading-[55px] font-normal">
                Leading companies trust us <br />
                <span className="font-bold"> to develop software</span>
              </h3>
            </span>
            <p className="text-sm md:leading-9 md:text-xl text-textGray">
              We{" "}
              <span className="text-[#a7337d]">add development capacity</span>{" "}
              to tech teams. Our value isn’t <br /> limited to building teams
              but is equally distributed across the <br /> project lifecycle. We
              are a custom software development <br /> company that guarantees
              the successful delivery of your <br /> project
            </p>
            <span className="mb-10 text-lg text-darkPurple">
              See more Information
            </span>
          </div>
          <div className="h-full">
            <img
              src={workGroupImage}
              alt="Team around office table"
              className="h-full"
            />
          </div>
        </div>
        <span className="p-5 md:pl-20 flex flex-col">
          <hr className="h-2 w-20 bg-gradient-to-r from-darkPurple to-coralPink mb-6" />
          <h3 className="text-4xl md:leading-[55px] font-normal">
            Meet the People <br />{" "}
            <span className="font-bold">We are Working With</span>
          </h3>
        </span>
      </div>
    </>
  );
}

export default Testimonials;
