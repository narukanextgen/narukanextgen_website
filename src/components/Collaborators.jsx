import partnerBg from "../assets/partners-bg.jpg";
import { partnerImages } from "../data/partnerImages";

function Collaborators() {
  return (
    <div className="h-96 md:h-[30rem] lg:h-[40rem] px-5 md:px-10 pt-16 md:pt-24 lg:pt-32 lg:px-32 relative">
      <div
        className="bg-no-repeat bg-center w-full h-full bg-cover rounded-3xl md:rounded-4xl"
        style={{ backgroundImage: `url(${partnerBg})` }}
      >
        <div className="bg-black/75 w-full h-full rounded-3xl md:rounded-4xl py-10 text-white">
          <h2 className="text-center font-extrabold text-3xl lg:text-6xl">
            Our Visionary Collaborators
          </h2>
          <p className="md:text-base lg:text-xl leading-para px-5 md:px-32 lg:px-[25%] text-center mt-10 md:mt-24 lg:mt-32">
            We are paving the way for future collaborations and partnerships
            with visionary investors and industry leaders who share our mission
            of innovation and excellence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Collaborators;
