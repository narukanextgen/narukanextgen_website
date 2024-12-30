import narulaLogo from "../assets/narula-logo.png";
import socialIcons from "../assets/social-icons.png";

function Footer() {
  return (
    <footer className="flex px-5 md:px-10 gap-5 lg:gap-16 pb-10 font-inter pt-20 flex-wrap">
      <div className="flex flex-col w-4/12 justify-start text-textGray lg:text-lg md:text-sm text-xs gap-3">
        <span className="flex font-bold text-black">
          Narula NextGen Infotech
        </span>
        <p className="text-textGray">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </p>
      </div>
      <div className="w-2/12">
        <ul className="text-textGray lg:text-lg md:text-sm text-xs flex flex-col text-center lg:text-start w-full gap-3">
          <li className="text-black font-bold">Links</li>
          <li>
            <button>About Us</button>
          </li>
          <li>
            <button>Services</button>
          </li>
          <li>
            <button>Case Studies</button>
          </li>
          <li>
            <button>How it works</button>
          </li>
          <li>
            <button>Blog</button>
          </li>
          <li>
            <button>Careers</button>
          </li>
          <li>
            <button>Areas We Serve</button>
          </li>
        </ul>
      </div>
      <div className="flex flex-col w-4/12 lg:text-lg md:text-sm text-xs text-textGray gap-3">
        <span className="font-bold text-black">Contact us</span>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </p>
        <p>+923183561921</p>
      </div>
      <div className="flex w-full md:w-60 flex-col justify-end items-center">
        <img src={socialIcons} alt="" />
      </div>
    </footer>
  );
}

export default Footer;
