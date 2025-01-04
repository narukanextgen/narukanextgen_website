import narulaLogo from "../assets/narula-nextgen.png";
import xIcon from "../assets/x.svg";
import menuIcon from "../assets/menu.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {!isMenuOpen && (
        <span className="w-screen fixed px-4 py-3 flex justify-between bg-white shadow-xl z-10 md:hidden">
          <button className="w-10 h-10" onClick={() => setIsMenuOpen(true)}>
            <img src={menuIcon} alt="Open Icon" className="w-full" />
          </button>
          <h3>Naruka NextGen</h3>
        </span>
      )}
      <header
        className={`md:w-full md:h-16 w-screen h-screen flex-col md:flex-row justify-between items-center md:px-8 md:shadow-2xl bg-white z-10 ${
          isMenuOpen ? "flex" : "hidden"
        } md:flex`}
      >
        <span className="flex w-full md:w-5 justify-between px-5 py-3 items-center">
          <img src={narulaLogo} alt="Narula Logo" />
          <button
            className="h-10 w-10 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <img src={xIcon} alt="Close Icon" className="w-full h-full" />
          </button>
          {/* <p className="hidden md:block">Narual NextGen</p> */}
        </span>
        <nav className="flex md:flex-row flex-col gap-5 items-center text-[#4A5568]">
          <button className="font-inter">About Us</button>
          <button className="font-inter">Services</button>
          <button className="font-inter">Case Studies</button>
          <button className="font-inter">Blog</button>
          <button className="font-inter">How It Works</button>
          <button className="font-inter">Hire</button>
          <Link to={"/careers"}>
            <button className="font-inter">Careers</button>
          </Link>
        </nav>
        <button className="text-white bg-gradient-to-bl from-[#6675F7] to-[#57007B] rounded px-3 py-2">
          Contact Us
        </button>
      </header>
    </>
  );
}

export default Navigation;
