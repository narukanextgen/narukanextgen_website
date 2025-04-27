import Effect from "../components/Effect";
import Partners from "../components/Partners";
import bannerBg from "../assets/services/banner-background.png";
import designsImage from "../assets/services/designs.png";
import itDevelopmentImage from "../assets/services/it-development.png";
import onlineMarketing from "../assets/services/online-marketing.png";
import ae from "../assets/services/ae.png";
import canva from "../assets/services/canva.png";
import ai from "../assets/services/ai.png";
import figma from "../assets/services/figma.png";
import id from "../assets/services/id.png";
import xd from "../assets/services/xd.png";
import sketch from "../assets/services/sketch.png";
import ps from "../assets/services/ps.png";
import wordpress from "../assets/services/wordpress.png";
import bootstrap from "../assets/services/bootstrap.png";
import { MoveRight } from "lucide-react";

import value1 from "../assets/values/value-1.png";
import value2 from "../assets/values/value-2.png";
import value3 from "../assets/values/value-3.png";
import value4 from "../assets/values/value-4.png";

import object1 from "../assets/services/services-object-1.png";
import object2 from "../assets/services/services-object-2.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "../data/projects";
import Collaborators from "../components/Collaborators";

function Projects() {
  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full">
      <Slider {...settings}>
        {projects.map((p, i) => (
          <div key={i} className="w-96 h-56 md:px-3 !flex items-center">
            <img src={p.img} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

function Services() {
  return (
    <div className="px-5 md:px-10 lg:px-20 lg:pt-24 font-montserrat">
      <div className="max-md:pt-24 md:px-0 lg:px-12 relative">
        <div
          className="max-md:h-[50vh] bg-center md:bg-[100%] bg-no-repeat bg-cover md:bg-contain py-32 px-16 max-md:rounded-3xl"
          style={{ backgroundImage: `url(${bannerBg})` }}
        >
          <h1 className="text-3xl md:text-4xl lg:leading-none lg:text-heading text-center font-extrabold">
            Providing innovative and independent IT solutions for all.
          </h1>
        </div>
        <img
          src={object1}
          alt="Decoration 1"
          className="absolute -left-5 md:-left-10 lg:-left-20 top-0 md:-top-20 lg:-top-32 max-md:w-44 max-lg:w-56"
        />
        <img
          src={object2}
          alt="Decoration 2"
          className="absolute -right-5 md:-right-10 lg:-right-20 bottom-0 translate-y-1/2 max-md:w-44 max-lg:w-56"
        />
      </div>
      <div className="lg:mt-32 max-md:mt-24 pt-4 md:pt-32">
        <h2
          className="text-3xl md:text-4xl md:leading-relaxed lg:text-heading lg:leading-[1.4] relative text-center font-extrabold after:content-['services'] after:-z-[1] 
        after:text-6xl md:after:text-9xl lg:after:text-effect after:uppercase after:leading-none after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
        after:bg-clip-text after:text-transparent/0 after:bg-gradient-to-b after:from-cyan-pale/50 after:via-lavender/50
         after:to-pink-candy/50"
        >
          Bundle Packages
        </h2>
        <div className="flex w-full justify-center">
          <Effect className="lg:mt-10" />
        </div>
        <p className="text-center text-black/80 md:text-2xl lg:px-56 mt-10">
          Whatever your IT requirement, we deliver with precision, creativity,
          and a commitment to excellence
        </p>

        <div className="w-full flex flex-col md:grid md:grid-cols-3 gap-y-10 md:gap-y-20 gap-x-5 md:gap-x-5 lg:gap-x-8 mt-20">
          <div className="flex flex-col bg-gradient-to-b from-indigo to-pink-candy rounded-3xl col-span-1 md:col-span-2 relative p-5 md:p-8 lg:p-12 text-white">
            <div className="lg:w-4/5 z-10 relative mb-3 md:mb-5 lg:mb-16">
              <h3 className="font-extrabold text-2xl md:text-3xl lg:text-4xl mb-3">
                Designs
              </h3>
              <p className="lg:text-lg">
                Crafting visually appealing and user-friendly designs that
                enhance user experience and brand identity
              </p>
            </div>
            <img
              src={designsImage}
              alt="designs image"
              className="absolute bottom-0 left-0 md:w-full lg:w-3/5"
            />
            <div className="w-full flex justify-end z-10 relative my-auto">
              <div className="md:w-full lg:w-3/5 grid grid-cols-2 text-sm gap-3 md:gap-7">
                <div className="flex flex-col px-3 py-5 items-center gap-2 md:gap-5 bg-purple-deep/50 rounded-2xl backdrop-blur-md">
                  <div className="flex items-center justify-between w-full">
                    <img src={ae} alt="" className="w-8 md:w-12" />
                    <img src={canva} alt="" className="w-8 md:w-12" />
                    <img src={ai} alt="" className="w-8 md:w-12" />
                  </div>
                  <div className="md:mb-4 font-semibold text-center">
                    Logos and Branding
                  </div>
                </div>

                <div className="flex flex-col px-3 py-5 items-center gap-2 md:gap-5 bg-purple-deep/50 rounded-2xl backdrop-blur-md">
                  <div className="flex items-center justify-between w-full">
                    <img src={figma} alt="" className="w-8 md:w-12" />
                    <img src={id} alt="" className="w-8 md:w-12" />
                    <img src={xd} alt="" className="w-8 md:w-12" />
                  </div>
                  <div className="md:mb-4 font-semibold">Apps Design</div>
                </div>

                <div className="flex flex-col px-3 py-5 items-center gap-2 md:gap-5 bg-purple-deep/50 rounded-2xl backdrop-blur-md">
                  <div className="flex items-center justify-between w-full">
                    <img src={canva} alt="" className="w-8 md:w-12" />
                    <img src={sketch} alt="" className="w-8 md:w-12" />
                    <img src={ps} alt="" className="w-8 md:w-12" />
                  </div>
                  <div className="md:mb-4 font-semibold text-center">
                    Graphic Design
                  </div>
                </div>

                <div className="flex flex-col px-3 py-5 items-center gap-2 md:gap-5 bg-purple-deep/50 rounded-2xl backdrop-blur-md">
                  <div className="flex items-center justify-between w-full">
                    <img src={wordpress} alt="" className="w-8 md:w-12" />
                    <img src={figma} alt="" className="w-8 md:w-12" />
                    <img src={bootstrap} alt="" className="w-8 md:w-12" />
                  </div>
                  <div className="md:mb-4 font-semibold">Website Design</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-black px-5 py-5 md:py-10 bg-gradient-to-br from-cyan-pale via-lavender to-pink-candy rounded-3xl flex flex-col justify-between">
            <div>
              <h3 className="font-extrabold text-2xl md:text-3xl lg:text-4xl mb-3">
                Business
              </h3>
              <p className="max-md:text-sm lg:text-lg">
                Helping businesses grow through tailored strategies, optimized
                processes, and impactful solutions for long-term success.
              </p>
            </div>
            <div className="max-md:mt-5 grid grid-cols-2 text-sm gap-3 md:gap-x-2 lg:gap-x-5 md:gap-y-5 lg:gap-y-8 my-auto font-semibold">
              <div className="md:h-24 lg:h-32 text-xs md:text-sm lg:text-base bg-white/50 backdrop-blur-md rounded-lg px-2 py-5 md:p-5 flex items-end justify-center">
                <p>Digital Strategy</p>
              </div>
              <div className="md:h-24 lg:h-32 md:text-sm lg:text-base bg-white/50 backdrop-blur-md rounded-lg px-2 py-5 md:p-5 flex items-end justify-center">
                Content Writing
              </div>
              <div className="md:h-24 lg:h-32 text-xs md:text-sm lg:text-base bg-white/50 backdrop-blur-md rounded-lg px-2 py-5 md:p-5 flex items-end justify-center">
                Business Consulting
              </div>
              <div className="md:h-24 lg:h-32 md:text-sm lg:text-base bg-white/50 backdrop-blur-md rounded-lg px-2 py-5 md:p-5 flex items-end justify-center">
                Reporting
              </div>
            </div>
          </div>

          <div className="text-black px-5 py-5 md:py-10 bg-gradient-to-b from-cyan-light to-white rounded-3xl flex flex-col justify-between">
            <div>
              <h3 className="font-extrabold text-2xl md:text-3xl lg:text-4xl mb-3">
                Technology
              </h3>
              <p className="max-md:text-sm lg:text-lg">
                Leveraging cutting-edge technologies to build scalable, secure,
                and innovative solutions for modern challenges.
              </p>
            </div>
            <div className="flex flex-col gap-y-5 my-auto font-semibold py-5">
              <div className="md:h-24 lg:h-32 md:text-sm lg:text-base bg-white backdrop-blur-md rounded-lg p-5 flex items-end justify-center">
                <p>Hosting</p>
              </div>
              <div className="md:h-24 lg:h-32 md:text-sm lg:text-base bg-white backdrop-blur-md rounded-lg p-5 flex items-end justify-center">
                <p>Big Data Analysis</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br flex flex-col from-indigo to-cyan-bright rounded-3xl col-span-2 relative p-5 md:p-8 lg:p-12 text-white overflow-hidden">
            <div className="md:w-full lg:w-4/5 z-10 relative">
              <h3 className="font-extrabold text-2xl md:text-3xl lg:text-4xl mb-3">
                IT Development
              </h3>
              <p className="max-md:text-sm lg:text-lg">
                Developing robust IT systems and applications that streamline
                operations, boost productivity, and drive business innovation.
              </p>
            </div>
            <img
              src={itDevelopmentImage}
              alt="designs image"
              className="absolute -bottom-12 right-0 md:w-full lg:w-3/5"
            />
            <div className="w-full flex justify-start z-10 relative mt-5 md:my-auto lg:mt-auto">
              <div className="md:w-full lg:w-3/5 grid grid-cols-2 text-sm gap-3 md:gap-7">
                <div className="flex px-3 py-5 items-end justify-center gap-5 bg-purple-deep/50 rounded-2xl backdrop-blur-md h-28">
                  <div className="font-semibold">Content Management</div>
                </div>

                <div className="flex px-3 py-5 items-end justify-center gap-5 bg-purple-deep/50 rounded-2xl backdrop-blur-md h-28">
                  <div className="font-semibold">Ecommerce</div>
                </div>

                <div className="flex px-3 py-5 items-end justify-center gap-5 bg-purple-deep/50 rounded-2xl backdrop-blur-md h-28">
                  <div className="font-semibold">Mobile App Development</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b flex flex-col from-cyan-pale to-pink-candy rounded-3xl col-span-2 relative p-5 md:p-8 lg:p-12 text-black overflow-hidden">
            <div className="md:w-full lg:w-4/5 z-10 relative">
              <h3 className="font-extrabold text-2xl md:text-3xl lg:text-4xl mb-3">
                IT Development
              </h3>
              <p className="max-md:text-sm lg:text-lg">
                Developing robust IT systems and applications that streamline
                operations, boost productivity, and drive business innovation.
              </p>
            </div>
            <img
              src={onlineMarketing}
              alt="designs image"
              className="absolute bottom-0 -left-24 md:w-full lg:w-4/5"
            />
            <div className="w-full flex justify-end z-10 relative mt-5 md:my-auto lg:mt-10">
              <div className="md:w-full lg:w-4/5 grid grid-cols-3 text-sm gap-x-3 gap-y-7 max-md:text-xs">
                <div className="flex px-3 py-5 items-end justify-center gap-5 bg-white/50 rounded-2xl backdrop-blur-md h-24 md:h-28">
                  <div className="font-semibold">Social Media Marketing</div>
                </div>

                <div className="flex px-3 py-5 items-end justify-center gap-5 bg-white/50 rounded-2xl backdrop-blur-md h-24 md:h-28">
                  <div className="font-semibold">SEO</div>
                </div>

                <div className="flex px-3 py-5 items-end justify-center gap-5 bg-white/50 rounded-2xl backdrop-blur-md h-24 md:h-28">
                  <div className="font-semibold">Pay Per Click</div>
                </div>

                <div></div>

                <div className="flex px-3 py-5 items-end justify-center gap-5 bg-white/50 rounded-2xl backdrop-blur-md h-24 md:h-28">
                  <div className="font-semibold">Email Marketing</div>
                </div>

                <div className="flex px-3 py-5 items-end justify-center gap-5 bg-white/50 rounded-2xl backdrop-blur-md h-24 md:h-28">
                  <div className="font-semibold">Display Marketing</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-white py-5 px-5 md:py-10 bg-gradient-to-br from-pink-vivid to-indigo rounded-3xl flex flex-col justify-between">
            <div>
              <h3 className="font-extrabold text-2xl md:text-3xl lg:text-4xl mb-3">
                Content Strategy
              </h3>
              <p className="max-md:text-sm lg:text-lg">
                Creating compelling content strategies that resonate with your
                audience and amplify your brand message across platforms.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 md:gap-5 mt-5 md:my-auto font-semibold py-5">
              <div className="h-20 md:h-24 lg:h-32 text-xs md:text-sm lg:text-base bg-purple-deep/50 backdrop-blur-md rounded-lg px-2 py-5 flex items-end justify-center">
                <p>Marketing Flexibility</p>
              </div>
              <div className="h-20 md:h-24 lg:h-32 text-xs md:text-sm lg:text-base bg-purple-deep/50 backdrop-blur-md rounded-lg px-2 py-5 flex items-end justify-center">
                <p>Web Audit Practices</p>
              </div>

              <div className="h-20 md:h-24 lg:h-32 text-xs md:text-sm lg:text-base bg-purple-deep/50 backdrop-blur-md rounded-lg px-2 py-5 flex items-end justify-center">
                <p>Advertising Strategy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 md:mt-32">
        <div className="md:w-3/5">
          <h2 className="text-4xl md:text-5xl lg:text-heading font-extrabold">
            Ala Carte Service
          </h2>
          <Effect className="my-5 md:my-8 lg:my-10" />
          <p className="md:text-lg lg:text-2xl">
            Select the precise services your project demands. Our à la carte
            options provide the flexibility to tailor solutions to your exact
            needs.
          </p>
        </div>
        <div className="flex max-md:flex-col items-start md:-mb-40 w-full mt-16 md:mt-24 gap-5 lg:gap-8">
          <div className="flex flex-col md:w-1/3 gap-5 lg:gap-10">
            <div className="h-32 bg-gradient-to-br from-cyan-pale to-pink-candy flex font-extrabold px-5 md:px-8 lg:px-10 py-8 rounded-2xl text-3xl md:text-xl lg:text-2xl justify-between items-center">
              <span>
                Request Custom <br className="max-md:hidden" /> Service
              </span>
              <MoveRight className="w-12 h-12" />
            </div>

            <div className="px-5 lg:px-10 py-8 rounded-3xl md:h-[400px] lg:h-[500px] bg-gradient-to-br from-cyan-bright to-pink-vivid text-white">
              <h3 className="text-3xl md:text-2xl lg:text-cardHeading font-extrabold">
                Mobile App Development
              </h3>
              <p className="md:text-sm lg:text-2xl md:w-full lg:w-3/4 mt-5">
                Reach your audience on the go with a custom mobile app. We build
                user-friendly solutions that drive engagement and growth.
              </p>
            </div>

            <div className="px-5 md:px-5 lg:px-10 py-8 rounded-3xl md:h-[400px] lg:h-[500px] border-4 border-indigo">
              <h3 className="text-3xl md:text-2xl lg:text-cardHeading font-extrabold">
                Blockchain Project
              </h3>
              <p className="md:text-sm lg:text-2xl md:w-full lg:w-3/4 mt-5">
                Explore the potential of blockchain technology for your
                business. We offer expertise in developing secure and
                transparent blockchain solutions.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:w-1/3 gap-5 lg:gap-10">
            <div className="px-5 lg:px-10 py-8 rounded-3xl md:h-[400px] lg:h-[500px] bg-gradient-to-br from-pink-candy to-indigo text-white">
              <h3 className="text-3xl md:text-2xl lg:text-cardHeading font-extrabold">
                UI & UX Design Development
              </h3>
              <p className="md:text-sm lg:text-2xl md:w-full lg:w-3/4 mt-5">
                Craft intuitive and engaging user experiences with our UI/UX
                design services. We create user-centered designs that drive
                satisfaction and achieve business goals.
              </p>
            </div>

            <div className="px-5 lg:px-10 py-8 rounded-3xl md:h-[400px] lg:h-[500px] border-4 border-cyan-bright">
              <h3 className="text-3xl md:text-2xl lg:text-cardHeading font-extrabold">
                SEO and Marketing
              </h3>
              <p className="md:text-sm lg:text-2xl md:w-full lg:w-3/4 mt-5">
                Achieve measurable results with our tailored SEO and marketing
                solutions. We help you improve your search engine rankings,
                increase brand awareness, and generate leads.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:w-1/3 gap-5 lg:gap-10 md:-translate-y-[18.5rem] lg:-translate-y-[21rem]">
            <div className="px-5 lg:px-10 py-8 rounded-3xl md:h-[400px] lg:h-[500px] bg-gradient-to-br from-cyan-bright to-indigo text-white">
              <h3 className="text-3xl md:text-2xl lg:text-cardHeading font-extrabold">
                Website Development
              </h3>
              <p className="md:text-sm lg:text-2xl md:w-full lg:w-3/4 mt-5">
                Drive business growth with a professionally designed and
                developed website. We build websites that attract visitors,
                engage users, and generate leads.
              </p>
            </div>

            <div className="px-5 lg:px-10 py-8 rounded-3xl md:h-[400px] lg:h-[500px] border-4 border-indigo">
              <h3 className="text-3xl md:text-2xl lg:text-cardHeading font-extrabold">
                QA and Tester Engineering
              </h3>
              <p className="md:text-sm lg:text-2xl md:w-full lg:w-3/4 mt-5">
                Ensure software quality with rigorous testing. We deliver a
                flawless user experience
              </p>
            </div>

            <div className="h-32 bg-gradient-to-br from-cyan-pale to-pink-candy flex font-extrabold px-5 lg:px-10 py-8 rounded-2xl text-3xl md:text-2xl justify-between items-center">
              <span>Explore our Products</span>
              <MoveRight className="w-12 h-12" />
            </div>

            <div className="h-32 bg-gradient-to-br from-cyan-pale to-pink-candy flex font-extrabold px-5 lg:px-10 py-8 rounded-2xl text-3xl md:text-2xl justify-between items-center">
              <span>Checkout our Portfolio</span>
              <MoveRight className="w-12 h-12" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        {/* <Partners /> */}
        <Collaborators />
      </div>

      <div className="w-full mt-24 md:mt-32">
        <div className="flex max-md:flex-col items-start md:gap-10">
          <span className="">
            <h2 className="font-extrabold text-4xl md:text-5xl lg:text-heading whitespace-nowrap">
              Our Values
            </h2>
            <Effect className="max-md:my-5 md:mt-8 lg:mt-10" />
          </span>
          <p className="md:text-lg lg:text-3xl">
            These core principles are the bedrock of our company, guiding every
            decision we make and shaping every interaction we have, both
            internally and with our valued clients.
          </p>
        </div>

        <div className="flex flex-col md:grid grid-cols-3 mt-16 gap-x-5 gap-y-5 lg:gap-y-10">
          <div className="pr-10 relative overflow-hidden lg:h-[240px]">
            <img src={value1} alt="Focus" className="w-10 h-10" />
            <h4 className="text-2xl font-extrabold mt-2 lg:mt-3">Focus</h4>
            <p className="lg:text-lg mt-3 lg:mt-5">
              We maintain an unwavering focus on achieving our clients'
              strategic objectives.
            </p>
            <div className="absolute w-full h-full text-[150px] lg:text-[240px] top-0 font-[1000] flex items-center justify-end bg-clip-text bg-gradient-to-b text-transparent from-cyan-pale to-pink-candy -z-10">
              01
            </div>
          </div>

          <div className="pr-10 relative overflow-hidden lg:h-[240px]">
            <img src={value2} alt="Commitment" className="w-10 h-10" />
            <h4 className="text-2xl font-extrabold mt-2 lg:mt-3">Commitment</h4>
            <p className="lg:text-lg mt-3 lg:mt-5">
              We are deeply committed to delivering exceptional results and
              exceeding expectations.
            </p>
            <div className="absolute w-full h-full text-[150px] lg:text-[240px] top-0 font-[1000] flex items-center justify-end bg-clip-text bg-gradient-to-b text-transparent from-cyan-pale to-pink-candy -z-10">
              02
            </div>
          </div>

          <div className="max-md:h-32 max-md:mt-10 max-md:order-2 relative row-span-2 flex px-5 lg:px-16 items-center rounded-3xl bg-gradient-to-br from-lavender via-cyan-bright to-pink-vivid">
            <MoveRight className="w-auto md:w-full h-full absolute text-black/50 right-0" />
            <span className="text-white font-extrabold text-3xl md:text-5xl lg:text-6xl z-10">
              Let's start to build a project
            </span>
          </div>

          <div className="pr-10 relative overflow-hidden lg:h-[240px]">
            <img src={value3} alt="Will" className="w-10 h-10" />
            <h4 className="text-2xl font-extrabold mt-2 lg:mt-3">Will</h4>
            <p className="lg:text-lg mt-3 lg:mt-5">
              We possess the will and determination to overcome challenges and
              achieve ambitious goals.
            </p>
            <div className="absolute w-full h-full text-[150px] lg:text-[240px] top-0 font-[1000] flex items-center justify-end bg-clip-text bg-gradient-to-b text-transparent from-cyan-pale to-pink-candy -z-10">
              03
            </div>
          </div>

          <div className="pr-10 relative overflow-hidden lg:h-[240px]">
            <img src={value4} alt="Trust" className="w-10 h-10" />
            <h4 className="text-2xl font-extrabold mt-2 lg:mt-3">Trust</h4>
            <p className="lg:text-lg mt-3 lg:mt-5">
              We cultivate trust through transparent communication and ethical
              practices.
            </p>
            <div className="absolute w-full h-full text-[150px] lg:text-[240px] top-0 font-[1000] flex items-center justify-end bg-clip-text bg-gradient-to-b text-transparent from-cyan-pale to-pink-candy -z-10">
              04
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 md:mt-32 overflow-hidden">
        <div>
          <h2 className="font-extrabold text-4xl md:text-5xl lg:text-heading whitespace-nowrap">
            Featured Projects
          </h2>
          <Effect className="mt-5 md:mt-8 lg:mt-10" />
        </div>
        <div className="md:w-screen -ml-20 pl-20 flex max-md:flex-col mt-10 max-md:gap-5">
          <p className="md:text-lg lg:text-3xl w-full md:w-1/5">
            Here's a selection of projects we're particularly proud of,
            demonstrating the breadth and depth of our capabilities.
          </p>
          <div className="w-full md:w-4/5">
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
