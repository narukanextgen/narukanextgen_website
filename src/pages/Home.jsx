import Banner from "../components/Banner";
import Culture from "../components/Culture";
import About from "../components/About";
import People from "../components/People";
import values from "../assets/Values.png";
import NewsCarousel from "../components/NewsCarousel";
import Partners from "../components/Partners";
import Values from "../components/Values";

function Home() {
  return (
    <>
      <Banner />
      <About />

      <Values />

      <Partners />

      <Culture />
      <People />

      <NewsCarousel />
    </>
  );
}

export default Home;
