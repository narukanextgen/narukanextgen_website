import Effect from "../components/Effect";
import contactBg from "../assets/contact-bg.png";
import contactBg1 from "../assets/contact-bg-1.png";
import contactBg2 from "../assets/contact-bg-2.png";
import traingle from "../assets/contact-traingle.png";
import { Facebook02Icon, InstagramIcon } from "hugeicons-react";
import { Linkedin01Icon } from "hugeicons-react";
import { NewTwitterIcon } from "hugeicons-react";

function Contact() {
  return (
    <div className="w-full font-montserrat">
      <div className="pt-56">
        <h2
          className="text-3xl md:text-4xl lg:text-heading leading-[1.4] relative text-center font-extrabold after:content-['contact'] after:-z-[1] 
        after:text-6xl md:after:text-9xl lg:after:text-effect after:uppercase after:leading-none after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
        after:bg-clip-text after:text-transparent/0 after:bg-gradient-to-b after:from-cyan-pale/50 after:via-lavender/50
         after:to-pink-candy/50"
        >
          Meet Awesome People
        </h2>
        <div className="flex justify-center">
          <Effect className="mt-5 lg:mt-10" />
        </div>
        <p className="mt-12 px-5 md:px-32 text-center text-base md:text-2xl">
          Connect with us to discover how our innovative digital solutions can
          drive your business forward, enhance your online presence, and support
          your long-term growth and success.
        </p>
      </div>
      <div>
        <img src={contactBg} alt="" />
      </div>

      <div className="flex justify-around items-center w-full px-32 pt-32 -z-[1]">
        <div className="flex flex-col items-center gap-5 pt-10">
          <div className="text-center">
            <h4 className="text-4xl font-extrabold">John Doe</h4>
            <p className="text-2xl">Pro Gamer and Creator</p>
          </div>

          <div className="flex justify-around w-full">
            <button>
              <Facebook02Icon />
            </button>
            <button>
              <Linkedin01Icon />
            </button>
            <button>
              <NewTwitterIcon />
            </button>
            <button>
              <InstagramIcon />
            </button>
          </div>

          <div className="text-center">
            <p>My Personal Contact</p>
            <p>+12 345 678 90</p>
          </div>

          <div className="text-center">
            <p>Say Hello on Skype</p>
            <p>johndoe.skype</p>
          </div>
        </div>

        <div className="w-1/2 flex shrink-0 justify-end gap-16 bg-white pl-10 pt-10 rounded-3xl shadow-all">
          <div className="relative">
            <div className="absolute w-48 h-48 border-8 -z-[2] -top-28 -left-28 rounded-full border-slate-300"></div>
            <h4 className="text-5xl font-extrabold bg-white">
              Contact <br />
              <span className="bg-clip-text bg-gradient-to-b from-indigo to-cyan-bright text-transparent">
                Me.
              </span>
            </h4>
          </div>

          <div className="w-1/2 relative z-[4] rounded-3xl grow">
            <form className="flex flex-col w-full gap-5 z-[3] rounded-3xl relative pb-10 backdrop-blur-md pr-10">
              <label htmlFor="name" className="w-full">
                <input
                  type="text"
                  name="name"
                  className="rounded-lg border-2 border-black/40 w-full h-12 px-5 focus:outline-cyan-bright"
                  placeholder="What is your name? *"
                />
              </label>

              <label htmlFor="email" className="w-full">
                <input
                  type="text"
                  name="email"
                  className="rounded-lg border-2 border-black/40 w-full h-12 px-5 focus:outline-cyan-bright"
                  placeholder="What is your email? *"
                />
              </label>

              <label htmlFor="message" className="w-full">
                <textarea
                  name="message"
                  className="rounded-lg border-2 border-black/40 w-full h-40 p-5 focus:outline-cyan-bright resize-none"
                  placeholder="Message here"
                ></textarea>
              </label>

              <button className="uppercase text-white bg-black rounded-full py-3 font-semibold">
                Send Message
              </button>
            </form>
            <img
              src={traingle}
              alt=""
              className="absolute z-[2] -right-10 -bottom-1/3"
            />
          </div>
        </div>
      </div>

      <div className="relative bg-gradient-to-br from-cyan-pale via-lavender to-pink-candy rounded-4xl mx-32 mt-96">
        <div>
          <img
            src={contactBg2}
            alt=""
            className="absolute w-1/2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-[2] opacity-15"
          />
        </div>
        <div
          style={{ backgroundImage: `url(${contactBg1})` }}
          className="bg-center bg-cover rounded-4xl w-full h-full px-36 pt-28 pb-24"
        >
          <h2 className="text-[44px] font-extrabold text-center">
            We're on the mission to make the public markets work for all people.
          </h2>
          <div className="w-full flex justify-center mt-10">
            <button className="text-white bg-black rounded-full text-2xl font-semibold px-16 py-4 uppercase">
              Join with us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
