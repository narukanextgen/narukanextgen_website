import Effect from "../components/Effect";
import about1 from "../assets/about-us/about1.png";
import about2 from "../assets/about-us/about2.png";
import about3 from "../assets/about-us/about3.png";
import { Quote } from "lucide-react";

function About() {
  return (
    <div className="w-full flex flex-col lg:mt-48 font-monteserrat px-5 py-20 md:px-10 md:py-44 lg:p-32">
      <h2
        className="text-3xl md:text-4xl lg:text-heading leading-[1.4] relative text-center font-extrabold after:content-['company'] after:-z-[1] 
        after:text-6xl md:after:text-9xl lg:after:text-effect after:uppercase after:leading-none after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
        after:bg-clip-text after:text-transparent/0 after:bg-gradient-to-b after:from-cyan-pale/50 after:via-lavender/50
         after:to-pink-candy/50"
      >
        Who We Are?
      </h2>

      <div className="flex w-full justify-center">
        <Effect className="md:-translate-x-full mt-5 lg:mt-10" />
      </div>

      <div className="bg-lavender/50 flex flex-col-reverse max-md:gap-10 md:flex-row pt-16 pb-5 md:pl-10 lg:pl-16 mt-10 md:mt-20 rounded-3xl px-5 md:px-0 md:rounded-4xl lg:rounded-6xl">
        <div className="w-full md:w-7/12 md:shrink-0 lg:shrink">
          <p className="md:text-base lg:text-lg leading-para">
            Naruka NextGen InfoTech is a leading digital solutions company
            dedicated to transforming businesses through innovative technology.
          </p>
          <p className="md:text-base lg:text-lg leading-para mt-8">
            We specialize in web design, development, and secure hosting
            services, delivering tailored solutions that drive growth and
            enhance digital presence. Our team combines creativity and technical
            expertise to help brands stay ahead in a fast-evolving digital
            world. Partner with us to turn your vision into impactful digital
            experiences.
          </p>
          <span className="mt-12 flex">
            <p className="text-lg md:text-xl lg:text-2xl leading-9 italic font-semibold relative">
              <Quote
                className="rotate-180 w-16 h-16 md:w-10 md:h-10 lg:w-16 lg:h-16 fill-indigo/20 absolute -top-5 md:-top-4 lg:-top-7 left-0"
                strokeWidth={0}
              />
              Blending creativity with technology to build impactful digital
              experiences for the future.
            </p>
          </span>
        </div>

        <div className="md:grid flex flex-col max-md:gap-5 grid-cols-2 md:translate-x-5 lg:translate-x-20 md:translate-y-8 lg:-translate-y-8">
          <span className="max-md:flex max-md:justify-center relative row-start-1 row-span-2 lg:translate-x-5 w-full md:w-44 lg:w-fit">
            <div className="relative w-fit h-fit">
              <img src={about3} alt="" />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo/50 to-cyan-bright/50 rounded-2xl"></div>
            </div>
            <p className="absolute z-[2] font-extrabold text-2xl md:text-lg lg:text-4xl w-full text-white top-1/2 max-md:-translate-y-1/2 md:top-10 text-center">
              <span className="text-7xl md:text-5xl lg:text-[80px]">+300 </span>
              <br />
              Developers
            </p>
          </span>

          <span className="max-md:flex max-md:justify-center md:-translate-y-5 md:translate-x-3 lg:translate-x-0 lg:-translate-y-1/4 w-full md:w-32 lg:w-fit">
            <div className="relative w-fit h-fit">
              <img src={about1} alt="" />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo/50 via-cyan-electric/50 to-pink-vivid/50 rounded-2xl"></div>
              <p className="absolute z-[2] font-extrabold text-2xl md:text-lg lg:text-4xl w-full text-white top-1/2 max-md:-translate-y-1/2 md:top-5 text-center leading-relaxed">
                Founded in{" "}
                <span className="text-7xl md:text-4xl lg:text-[72px] mt-10">
                  2024
                </span>
              </p>
            </div>
          </span>

          <span className="max-md:flex max-md:justify-center md:-translate-x-20 lg:-translate-x-12 md:-translate-y-10 lg:-translate-y-3 w-full md:w-56 lg:w-fit">
            <div className="relative w-fit h-fit">
              <img src={about2} alt="" />
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-pale/50 via-lavender/50 to-pink-candy/50 rounded-2xl"></div>
              <p className="absolute z-[2] font-extrabold text-2xl md:text-lg lg:text-4xl w-full text-white top-1/2 max-md:-translate-y-1/2 md:top-5 left-0 text-center leading-none">
                <span className="text-7xl md:text-4xl lg:text-[80px]">
                  +1000{" "}
                </span>{" "}
                <br />
                Projects
              </p>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
