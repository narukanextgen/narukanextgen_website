import Effect from "./Effect";
import culture1 from "../assets/culture/culture-1.png";
import culture2 from "../assets/culture/culture-2.png";
import culture3 from "../assets/culture/culture-3.png";
import culture4 from "../assets/culture/culture-4.png";
import culture5 from "../assets/culture/culture-5.png";
import culture6 from "../assets/culture/culture-6.png";

function Culture() {
  return (
    <div className="w-full flex flex-col mt-20 lg:mt-10 font-monteserrat md:pt-44 lg:pt-60">
      <h2
        className="heading text-2xl md:text-4xl lg:text-heading leading-[1.4] px-32 relative text-end font-extrabold after:content-['culture'] after:-z-[1] 
        after:text-6xl md:after:text-9xl lg:after:text-effect after:uppercase after:leading-none after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
        after:bg-clip-text after:text-transparent/0 after:bg-gradient-to-b after:from-cyan-pale/50 after:via-lavender/50
       after:to-pink-candy/50"
      >
        People and Enviornment
      </h2>

      <div className="flex justify-end">
        <Effect className="mr-[30%] mt-5 lg:mt-10" />
      </div>

      <div className="flex flex-col md:flex-row px-5 md:px-10 lg:px-32 gap-10 md:pt-16 lg:pt-24">
        <div className="w-full md:w-1/2 shrink-0">
          <div className="grid grid-rows-2 grid-flow-col content-center w-full gap-5">
            <div className="flex items-end -translate-y-10 shrink-0 md:w-24 lg:w-fit">
              <img
                src={culture1}
                alt=""
                className="shadow-all rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105 md:w-24 lg:w-fit"
              />
            </div>
            <div className="flex items-start -translate-y-10 shrink-0 md:w-24 lg:w-fit">
              <img
                src={culture2}
                alt=""
                className="shadow-all rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105 md:w-24 lg:w-fit"
              />
            </div>
            <div className="flex items-end translate-y-10 shrink-0 md:w-24 lg:w-fit">
              <img
                src={culture3}
                alt=""
                className="shadow-all rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105 md:w-24 lg:w-fit"
              />
            </div>
            <div className="flex items-start translate-y-10 shrink-0 md:w-24 lg:w-fit">
              <img
                src={culture4}
                alt=""
                className="shadow-all rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105 md:w-24 lg:w-fit"
              />
            </div>
            <div className="flex items-end shrink-0 md:w-32 lg:w-fit">
              <img
                src={culture5}
                alt=""
                className="shadow-all rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105 md:w-32 lg:w-fit"
              />
            </div>
            <div className="flex items-start shrink-0 md:w-24 lg:w-fit">
              <img
                src={culture6}
                alt=""
                className="shadow-all rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105 md:w-24 lg:w-fit"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:pt-20 space-y-5 md:space-y-3 lg:space-y-10">
          <h3 className="font-semibold text-xl md:text-lg lg:text-2xl leading-9">
            Where People and Ideas Thrive
          </h3>
          <p className="md:text-sm lg:text-lg leading-para">
            We believe that a strong company culture drives innovation and
            success. Our team thrives in an environment that values creativity,
            diversity, and collaboration.
          </p>
          <p className="md:text-sm lg:text-lg leading-para">
            At the core of our culture lies a commitment to creating an
            inspiring workplace where every voice matters, ideas flourish, and
            talents are nurtured. We welcome like-minded individuals to join us
            on this exciting journey of growth and innovation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Culture;
