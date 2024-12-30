import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import ServicesCarousel from "./components/ServicesCarousel";
import Testimonials from "./components/Testimonials";
import CaseStudies from "./components/CaseStudies";
import Endorsement from "./components/Endorsement";
import Approach from "./components/Approach";
import TechStack from "./components/TechStack";
import Roadmap from "./components/Roadmap";
import Resources from "./components/Resources";
import Hiring from "./components/Hiring";
import TestimonialCarousel from "./components/TestimonialCarousel";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Landing />
        <ServicesCarousel />
        <Testimonials />
        <TestimonialCarousel />
        <CaseStudies />
        <Endorsement />
        <Approach />
        <TechStack />
        <hr className="w-full h-[2px] bg-gray-200" />
        <Roadmap />
        <Resources />
        <Hiring />
      </main>
      <Footer />
    </>
  );
}

export default App;
