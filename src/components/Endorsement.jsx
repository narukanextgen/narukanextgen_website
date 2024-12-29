import endorsement1 from "../assets/endorsement1.png";
import endorsement2 from "../assets/endorsement2.png";
import endorsement3 from "../assets/endorsement3.png";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";

function Endorsement() {
  return (
    <div className="flex flex-col items-center lg:px-28 px-5 font-inter max-w-full">
      <hr className="h-2 w-20 bg-gradient-to-r from-darkPurple to-coralPink mb-6 mt-20" />

      <h3 className="text-4xl md:leading-[55px] font-normal text-center mb-20">
        Way of building <br />
        <span className="font-bold"> Great Software</span>
      </h3>

      <div className="w-full lg:h-[30rem] flex flex-col lg:flex-row-reverse justify-between rounded-2xl mb-10 lg:mb-28">
        <img
          src={endorsement1}
          alt="Endorsement 1"
          className="grow-0 shrink-0 h-full"
        />

        <div className="lg:w-[34rem] mt-8">
          <h3 className="text-xl lg:text-3xl font-semibold mb-10">
            Build the right team to scale
          </h3>

          <p className="text-sm lg:text-lg mb-5 lg:mb-10 font-normal text-gray-800">
            Finding the right talent is not easy. We help you find the talent
            that suits your needs, follows your processes, and sticks with you
            long term (not the case with freelancers)
          </p>

          <p className="text-sm lg:text-lg mb-3 lg:mb-8 font-normal text-gray-800">
            Our <span className="text-magentaPink">delivery model</span> helps
            you cut costs and deliver within budget.
          </p>

          <span className="flex gap-2 lg:gap-5 h-20 lg:h-20 items-center">
            <hr className="h-full w-1 shrink-0 bg-gradient-to-t from-darkPurple to-coralPink" />
            <p className="text-sm lg:text-lg font-normal text-transparent italic bg-gradient-to-t from-magentaPink to-coralPink bg-clip-text">
              "Simform is quick to identify larger problem with the Software so
              we decided to expand our scope to build new modules"
            </p>
          </span>

          <span className="flex gap-3 mt-8 items-center">
            <img src={person1} alt="Person 1" className="shrink-0 grow-0" />
            <span className="flex flex-col text-base justify-between">
              <span>Jeewa Markram</span>
              <span className="text-sm text-slate-500">CEO</span>
            </span>
          </span>
        </div>
      </div>

      <div className="w-full lg:h-[30rem] flex flex-col lg:flex-row justify-between rounded-2xl mb-10 lg:mb-28">
        <img
          src={endorsement2}
          alt="Endorsement 1"
          className="grow-0 shrink-0 h-full"
        />

        <div className="lg:w-[34rem] mt-8">
          <h3 className="text-xl lg:text-3xl font-semibold mb-10">
            Build the right team to scale
          </h3>

          <p className="text-sm lg:text-lg mb-5 lg:mb-10 font-normal text-gray-800">
            Finding the right talent is not easy. We help you find the talent
            that suits your needs, follows your processes, and sticks with you
            long term (not the case with freelancers)
          </p>

          <p className="text-sm lg:text-lg mb-3 lg:mb-8 font-normal text-gray-800">
            Our <span className="text-magentaPink">delivery model</span> helps
            you cut costs and deliver within budget.
          </p>

          <span className="flex gap-2 lg:gap-5 h-20 lg:h-20 items-center">
            <hr className="h-full w-1 shrink-0 bg-gradient-to-t from-darkPurple to-coralPink" />
            <p className="text-sm lg:text-lg font-normal text-transparent italic bg-gradient-to-t from-magentaPink to-coralPink bg-clip-text">
              "Simform is quick to identify larger problem with the Software so
              we decided to expand our scope to build new modules"
            </p>
          </span>

          <span className="flex gap-3 mt-8 items-center">
            <img src={person2} alt="Person 1" className="shrink-0 grow-0" />
            <span className="flex flex-col text-base justify-between">
              <span>Jeewa Markram</span>
              <span className="text-sm text-slate-500">CEO</span>
            </span>
          </span>
        </div>
      </div>

      <div className="w-full lg:h-[30rem] flex flex-col lg:flex-row-reverse justify-between rounded-2xl mb-10 lg:mb-28">
        <img
          src={endorsement3}
          alt="Endorsement 1"
          className="grow-0 shrink-0 h-full"
        />

        <div className="lg:w-[34rem] mt-8">
          <h3 className="text-xl lg:text-3xl font-semibold mb-10">
            Build the right team to scale
          </h3>

          <p className="text-sm lg:text-lg mb-5 lg:mb-10 font-normal text-gray-800">
            Finding the right talent is not easy. We help you find the talent
            that suits your needs, follows your processes, and sticks with you
            long term (not the case with freelancers)
          </p>

          <p className="text-sm lg:text-lg mb-3 lg:mb-8 font-normal text-gray-800">
            Our <span className="text-magentaPink">delivery model</span> helps
            you cut costs and deliver within budget.
          </p>

          <span className="flex gap-2 lg:gap-5 h-20 lg:h-20 items-center">
            <hr className="h-full w-1 shrink-0 bg-gradient-to-t from-darkPurple to-coralPink" />
            <p className="text-sm lg:text-lg font-normal text-transparent italic bg-gradient-to-t from-magentaPink to-coralPink bg-clip-text">
              "Simform is quick to identify larger problem with the Software so
              we decided to expand our scope to build new modules"
            </p>
          </span>

          <span className="flex gap-3 mt-8 items-center">
            <img src={person3} alt="Person 1" className="shrink-0 grow-0" />
            <span className="flex flex-col text-base justify-between">
              <span>Jeewa Markram</span>
              <span className="text-sm text-slate-500">CEO</span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Endorsement;
