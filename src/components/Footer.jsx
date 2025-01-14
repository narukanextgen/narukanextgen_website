import React from "react";

function Footer() {
  return (
    <footer className="w-full flex p-10 md:gap-5 lg:gap-0 font-montserrat mt-20">
      <div className="w-1/4"></div>
      <div className="flex flex-col md:gap-2 lg:gap-5 w-1/6 md:text-sm lg:text-base">
        <h5 className="text-lg text-purple-deep font-bold uppercase">
          Company
        </h5>
        <p>About Us</p>
        <p>Careers</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>
      <div className="flex flex-col md:gap-2 lg:gap-5 w-1/6 md:text-sm lg:text-base">
        <h5 className="text-lg text-purple-deep font-bold uppercase">
          Services
        </h5>
        <p>Web Development </p>
        <p>Cloud Solutions</p>
        <p>UI/UX Design</p>
        <p>Consulting</p>
      </div>
      <div className="flex flex-col md:gap-2 lg:gap-5 w-1/6 md:text-sm lg:text-base">
        <h5 className="text-lg text-purple-deep font-bold uppercase">
          Resources
        </h5>
        <p>Help Center</p>
        <p>Documentation </p>
        <p>Community Forum </p>
        <p>Tutorials</p>
      </div>
      <div className="w-1/4"></div>
    </footer>
  );
}

export default Footer;
