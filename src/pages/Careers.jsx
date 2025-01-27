import NewsCarousel from "../components/NewsCarousel";
import Effect from "../components/Effect";
import benefit1 from "../assets/benefit-icons/benefit-1.png";
import benefit2 from "../assets/benefit-icons/benefit-2.png";
import benefit3 from "../assets/benefit-icons/benefit-3.png";
import benefit4 from "../assets/benefit-icons/benefit-4.png";
import benefit5 from "../assets/benefit-icons/benefit-5.png";
import benefit6 from "../assets/benefit-icons/benefit-6.png";
import teamBackground from "../assets/career-banner.png";
import joinUsBackground from "../assets/join-us-bg.jpg";
import Jobs from "../components/Jobs";

function Benefits() {
  return (
    <div className="flex flex-col gap-10 lg:gap-16 w-full">
      <div className="flex gap-5 items-center">
        <div>
          <span className="w-20 h-20 block rounded-2xl bg-gradient-to-br from-pink-vivid to-white">
            <img
              src={benefit1}
              alt=""
              className="w-full h-full -translate-x-2 -translate-y-3 scale-125"
            />
          </span>
        </div>
        <span>
          <h4 className="text-2xl font-semibold mb-2">Working Remotely</h4>
          <p>
            Embrace the flexibility of remote work with a collaborative
            environment that fosters productivity, innovation, and work-life
            balance.
          </p>
        </span>
      </div>

      <div className="flex gap-5 items-center">
        <div>
          <span className="w-20 h-20 block rounded-2xl bg-gradient-to-br from-cyan-electric to-white">
            <img
              src={benefit2}
              alt=""
              className="-translate-x-2 -translate-y-3 scale-125"
            />
          </span>
        </div>
        <span>
          <h4 className="text-2xl font-semibold mb-2">Performance Bonus</h4>
          <p>
            Rewarding excellence with performance bonuses that recognize hard
            work, innovation, and outstanding contributions to company growth.
          </p>
        </span>
      </div>

      <div className="flex gap-5 items-center">
        <div>
          <span className="w-20 h-20 block rounded-2xl bg-gradient-to-br from-pink-vivid to-white">
            <img
              src={benefit3}
              alt=""
              className="-translate-x-2 -translate-y-3 scale-125"
            />
          </span>
        </div>
        <span>
          <h4 className="text-2xl font-semibold mb-2">Health & Insurance</h4>
          <p>
            Comprehensive health and insurance plans designed to support
            employee well-being and provide financial security for a healthier,
            worry-free future.
          </p>
        </span>
      </div>

      <div className="flex gap-5 items-center">
        <div>
          <span className="w-20 h-20 block rounded-2xl bg-gradient-to-br from-pink-vivid to-white">
            <img
              src={benefit4}
              alt=""
              className="-translate-x-2 -translate-y-3 scale-125"
            />
          </span>
        </div>
        <span>
          <h4 className="text-2xl font-semibold mb-2">Continuous Learning</h4>
          <p>
            A culture of continuous learning, offering opportunities for
            personal and professional growth through training, workshops, and
            access to the latest industry insights.
          </p>
        </span>
      </div>

      <div className="flex gap-5 items-center">
        <div>
          <span className="w-20 h-20 block rounded-2xl bg-gradient-to-br from-pink-vivid to-white">
            <img
              src={benefit5}
              alt=""
              className="-translate-x-2 -translate-y-3 scale-125"
            />
          </span>
        </div>
        <span>
          <h4 className="text-2xl font-semibold mb-2">Parental Leave</h4>
          <p>
            Generous parental leave policies that support work-life balance,
            ensuring employees can fully embrace their roles as parents while
            maintaining their professional growth.
          </p>
        </span>
      </div>

      <div className="flex gap-5 items-center">
        <div>
          <span className="w-20 h-20 block rounded-2xl bg-gradient-to-br from-pink-vivid to-white">
            <img
              src={benefit6}
              alt=""
              className="-translate-x-2 -translate-y-3 scale-125"
            />
          </span>
        </div>
        <span>
          <h4 className="text-2xl font-semibold mb-2">Free Lunch</h4>
          <p>
            Enjoy the convenience of free lunch, providing nourishing meals to
            keep employees energized and foster a collaborative, vibrant
            workplace culture.
          </p>
        </span>
      </div>
    </div>
  );
}

function Careers() {
  return (
    <div className="w-full font-monteserrat">
      <div className="w-full lg:mt-10 font-monteserrat pt-24">
        <h2
          className="text-3xl md:text-4xl lg:text-heading leading-[1.4] lg:px-32 relative text-center font-extrabold after:content-['careers'] after:-z-[1] 
        after:text-6xl md:after:text-9xl lg:after:text-effect after:uppercase after:leading-none after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
        after:bg-clip-text after:text-transparent/0 after:bg-gradient-to-b after:from-cyan-pale/50 after:via-lavender/50
      after:to-pink-candy/50"
        >
          Be a Part of Our Journey
        </h2>
        <div className="w-full flex justify-center">
          <Effect className="mt-5 lg:mt-10" />
        </div>

        <p className="mt-12 px-5 md:px-32 text-center text-base md:text-2xl">
          Join a dynamic and innovative team dedicated to shaping the future of
          technology through creativity, collaboration, and impactful digital
          solutions.
        </p>

        <div className="font-semibold flex justify-center mt-16 gap-5 md:gap-10 ">
          <button className="rounded-full px-5 py-3 bg-indigo uppercase text-white">
            Explore Opportunities
          </button>
          <button className="rounded-full px-5 py-3 uppercase border border-black">
            See Benefits
          </button>
        </div>

        <img src={teamBackground} alt="" className="w-full" />

        <div className="bg-gradient-to-b from-indigo to-purple-deep rounded-t-4xl md:rounded-t-6xl flex max-md:mt-10 max-md:flex-col pt-24 md:pt-32 pb-80 md:pb-96 px-5 md:px-10 lg:px-24 gap-10 text-white">
          <div className="w-full md:w-2/4">
            <h3 className="text-3xl md:text-5xl md:leading-tight lg:text-heading lg:leading-[72px] font-extrabold">
              Benefits of Working Here
            </h3>
            <Effect className="mt-6" />
            <p className="md:text-lg lg:text-2xl mt-10">
              We recognize that compensation and benefits play a major part in
              making sure that you feel you can focus on your work. We offer
              generous packages to make sure you feel respected and appreciated
              as an employee.
            </p>
          </div>

          <div className="w-full md:w-3/5">
            <Benefits />
          </div>
        </div>
        <div className="-translate-y-[6rem] relative rounded-t-4xl md:rounded-t-6xl z-[2] bg-white">
          <div
            style={{ backgroundImage: `url(${joinUsBackground})` }}
            className="rounded-3xl md:rounded-4xl bg-center bg-cover lg:h-96 -translate-y-1/2 -mb-16 mx-10 md:mx-20 lg:mx-40"
          >
            <div className="w-full h-full rounded-3xl md:rounded-4xl bg-black/60 flex max-md:gap-5 max-md:flex-col px-5 py-10 md:px-10 md:py-20 lg:p-20 items-center">
              <h5 className="text-lg md:text-2xl lg:text-4xl leading-10 italic text-white w-full md:w-3/5">
                Discover how innovative solutions and cutting-edge technology
                drive business growth and digital transformation.
              </h5>
              <div className="flex h-full md:w-2/5 items-center justify-end">
                <button className="px-5 py-3 md:px-8 md:py-5 rounded-full md:text-xl lg:text-2xl uppercase bg-cyan-light text-cyan-dark font-semibold">
                  More About Us
                </button>
              </div>
            </div>
          </div>
          <div className="px-5 md:px-10 lg:px-56">
            <h2 className="text-3xl md:text-4xl lg:text-heading leading-[1.4] px-32 relative text-center font-extrabold ">
              Open Positions
            </h2>
            <div className="flex justify-center">
              <Effect className="mt-5 lg:mt-10" />
            </div>
            <div>
              <Jobs />
            </div>
          </div>
        </div>
      </div>
      <NewsCarousel />
    </div>
  );
}

export default Careers;
