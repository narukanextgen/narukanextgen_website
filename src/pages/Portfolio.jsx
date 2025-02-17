import Effect from "../components/Effect";
import BannerBg from "../assets/contact-bg-2.png";
import portfolio1 from "../assets/portfolio/portfolio-banner-1.jpg";
import portfolio2 from "../assets/portfolio/portfolio-banner-2.jpg";
import portfolio3 from "../assets/portfolio/portfolio-banner-3.jpg";
import portfolioDecor1 from "../assets/portfolio/portfolio-decor-1.png";
import portfolioDecor2 from "../assets/portfolio/portfolio-decor-2.png";

import inkBlot from "../assets/portfolio/ink-blot.jpg";
import lizard from "../assets/portfolio/lizard.jpg";
import deer from "../assets/portfolio/deer.jpg";
import blueSpiral from "../assets/portfolio/blue-spiral.jpg";
import circlesPattern from "../assets/portfolio/circles-pattern.jpg";
import blueWhitePattern from "../assets/portfolio/blue-white-pattern.jpg";
import goldCurves from "../assets/portfolio/gold-curves.jpg";
import splash from "../assets/portfolio/splash.jpg";
import bathtub from "../assets/portfolio/bathtub.jpg";
import purpleViolet from "../assets/portfolio/purple-violet.jpg";
import discs from "../assets/portfolio/discs.jpg";

import inside1 from "../assets/portfolio/inside-1.png";
import inside2 from "../assets/portfolio/inside-2.png";
import inside3 from "../assets/portfolio/inside-3.png";

import { testimonials } from "../data/testimonials";

function Testimonials({ name, team, testimonial }) {
  return (
    <div>
      <div className="rounded-3xl h-56 md:w-48 md:h-56 lg:w-64 lg:h-52 relative overflow-visible">
        <div className="border-2 border-cyan-pale w-full h-full rounded-3xl px-5 py-8 bg-white">
          <p>{testimonial}</p>
        </div>
        <div className="absolute rounded-3xl -left-5 bottom-8 border border-indigo w-full h-full -rotate-6 -z-10"></div>
      </div>
      <div className="text-2xl font-semibold mt-5 lg:mt-2">{name}</div>
      <div>{team}</div>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="px-5 md:px-10 lg:px-24 pt-24 font-montserrat">
      <div className="relative w-full h-[50vh] md:h-96 md:mb-36 bg-gradient-to-r from-indigo/50 via-cyan-electric/50 to-pink-vivid/50 rounded-4xl">
        <img
          src={portfolioDecor1}
          alt=""
          className="absolute w-40 -left-10 -top-10 md:-left-16 md:-top-16 lg:-left-24 lg:-top-24"
        />
        <img
          src={portfolioDecor2}
          alt=""
          className="absolute w-40 -right-5 bottom-1/4 md:-right-12 lg:-right-24 md:bottom-0 z-10"
        />
        <div className="relative w-full h-full overflow-hidden rounded-4xl">
          <img
            src={BannerBg}
            alt=""
            className="-rotate-[95deg] absolute left-1/3 w-1/2 -top-20 opacity-35"
          />
        </div>
        <div className="absolute left-10 bottom-0 md:translate-y-3/4 max-md:mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-heading font-extrabold leading-[1.125]">
            Explore More Than <br /> 200 Our Works
          </h1>
          <Effect className="mt-5" />
        </div>

        <div className="absolute -top-10 md:-bottom-16 lg:-top-5 -right-5 lg:-right-20 grid md:grid-cols-[160px_128px] lg:grid-cols-[286px_182px] gap-x-5 lg:gap-x-8">
          <img
            src={portfolio1}
            alt=""
            className="w-32 md:w-40 lg:w-[286px] rounded-3xl"
          />
          <img
            src={portfolio2}
            alt=""
            className="w-20 md:w-32 lg:w-[182px] mt-12 lg:mt-20 rounded-3xl"
          />
          <img
            src={portfolio3}
            alt=""
            className="w-40 md:w-60 lg:w-[392px] col-span-2 -mt-10 md:-mt-10 lg:-mt-32 justify-self-end rounded-3xl"
          />
        </div>
      </div>

      <div className="pt-20 md:pt-8 lg:pt-24">
        <div className="flex h-10 md:h-12 rounded-full text-xs md:text-xl lg:text-2xl font-semibold justify-around items-center bg-gradient-to-br from-cyan-pale via-lavender to-pink-candy">
          <span>ALL</span>
          <span>COLLECTION</span>
          <span>APPS</span>
          <span>WEBSITE</span>
          <span>NFT</span>
          <span>DESIGNS</span>
          <span>ART</span>
        </div>
      </div>

      <div className="flex max-md:flex-col md:gap-5">
        <div className="md:w-1/3 space-y-8 pt-8 md:py-10">
          <div className="rounded-3xl p-5 lg:pt-10 flex flex-col bg-gradient-to-br from-cyan-pale via-indigo to-lavender gap-2 lg:gap-5 text-white">
            <h5 className="font-bold text-2xl">Digital Designs</h5>
            <p>
              Creating stunning, user-friendly, and functional digital
              experiences.
            </p>
            <img src={inside3} alt="" />
          </div>

          <div className="rounded-3xl relative overflow-hidden">
            <img src={portfolio1} alt="" />
            <div className="absolute bottom-0 w-full rounded-3xl p-8 max-md:pb-20 lg:p-10 lg:pb-20 bg-gradient-to-br from-cyan-pale via-lavender to-pink-candy">
              <h5 className="text-2xl lg:text-3xl font-semibold mb-5">
                UI/UX Design
              </h5>
              <a href="">www.linktothis.com</a>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden">
            <img src={inkBlot} alt="" />
          </div>

          <div className="rounded-3xl overflow-hidden">
            <img src={lizard} alt="" />
          </div>

          <div className="rounded-3xl overflow-hidden">
            <img src={deer} alt="" />
          </div>
        </div>

        <div className="md:w-1/3 space-y-8 pt-8 md:py-10">
          <div className="rounded-3xl overflow-hidden">
            <img src={blueSpiral} alt="" />
          </div>

          <div className="rounded-3xl overflow-hidden">
            <img src={circlesPattern} alt="" />
          </div>

          <div className="rounded-3xl p-5 lg:pt-10 flex flex-col bg-gradient-to-br from-cyan-pale via-cyan-light to-cyan-electric gap-2 lg:gap-5">
            <h5 className="font-bold text-2xl">Digital Marketing</h5>
            <p>
              Driving growth with SEO, social media, PPC, and content marketing.
            </p>
            <img src={inside2} alt="" />
          </div>

          <div className="rounded-3xl overflow-hidden">
            <img src={blueWhitePattern} alt="" />
          </div>

          <div className="rounded-3xl p-5 lg:pt-10 flex flex-col bg-gradient-to-br from-indigo/20 to-indigo gap-2 lg:gap-5">
            <h5 className="font-bold text-2xl">Web Development</h5>
            <p>
              Building fast, responsive, and user-friendly websites for a
              seamless digital experience
            </p>
            <img src={inside1} alt="" />
          </div>
        </div>

        <div className="md:w-1/3 space-y-8 pt-8 md:py-10 overflow-hidden">
          <div className="rounded-3xl overflow-hidden h-[250px] md:h-[320px] lg:h-[550px]">
            <img src={goldCurves} alt="" className="w-full h-full" />
          </div>
          <div className="rounded-3xl overflow-hidden">
            <img src={splash} alt="" />
          </div>
          <div className="rounded-3xl overflow-hidden">
            <img src={bathtub} alt="" />
          </div>
          <div className="rounded-3xl overflow-hidden">
            <img src={purpleViolet} alt="" />
          </div>
          <div className="rounded-3xl overflow-hidden">
            <img src={discs} alt="" />
          </div>
        </div>
      </div>

      <div className="mt-20 md:mt-8 lg:mt-24">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-heading font-extrabold leading-[1.125]">
            Client Testimonials
          </h1>
          <Effect className="mt-5" />
        </div>

        <div className="flex justify-between overflow-hidden pt-12 pl-8 lg:pl-10 mt-10">
          {testimonials.map((t, i) => {
            if (window.screen.width < 768) {
              return i < 1 ? (
                <Testimonials
                  key={i}
                  name={t.name}
                  team={t.team}
                  testimonial={t.testimonial}
                />
              ) : null;
            }

            if (window.screen.width < 1024) {
              return i < 3 ? (
                <Testimonials
                  key={i}
                  name={t.name}
                  team={t.team}
                  testimonial={t.testimonial}
                />
              ) : null;
            }
            return (
              <Testimonials
                key={i}
                name={t.name}
                team={t.team}
                testimonial={t.testimonial}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
