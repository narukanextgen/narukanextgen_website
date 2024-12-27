import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import ServicesCarousel from "./components/ServicesCarousel";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Landing />
        <ServicesCarousel />
        <Testimonials />
      </main>
    </>
  );
}

export default App;
