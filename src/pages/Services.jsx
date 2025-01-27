import Effect from "../components/Effect";
import bannerBg from "../assets/services/banner-background.png";

function Services() {
  return (
    <div className="lg:px-24 lg:pt-24">
      <div
        className="bg-[100%] bg-no-repeat bg-contain py-24 px-16"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <h1 className="text-heading text-center font-extrabold">
          Providing innovative and independent IT solutions for all.
        </h1>
      </div>
      <div className="mt-32 pt-32">
        <h2
          className="text-3xl md:text-4xl lg:text-heading lg:leading-[1.4] relative text-center font-extrabold after:content-['services'] after:-z-[1] 
        after:text-6xl md:after:text-9xl lg:after:text-effect after:uppercase after:leading-none after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
        after:bg-clip-text after:text-transparent/0 after:bg-gradient-to-b after:from-cyan-pale/50 after:via-lavender/50
         after:to-pink-candy/50"
        >
          Bundle Packages
        </h2>
        <div className="flex w-full justify-center">
          <Effect className="lg:mt-10" />
        </div>
        <p className="text-center text-2xl lg:px-56 mt-10">
          Whatever your IT requirement, we deliver with precision, creativity,
          and a commitment to excellence
        </p>
      </div>
    </div>
  );
}

export default Services;
