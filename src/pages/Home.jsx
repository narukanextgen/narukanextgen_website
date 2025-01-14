import Banner from "../components/Banner";
import Culture from "../components/Culture";
import About from "../components/About";
import People from "../components/People";
import values from "../assets/Values.png";
import NewsCarousel from "../components/NewsCarousel";
import Partners from "../components/Partners";

function Home() {
  return (
    <>
      <Banner />
      <About />

      <div className="w-full flex px-5 md:px-10 lg:px-0 justify-center">
        <img src={values} alt="Our Values" />
      </div>

      <Partners />

      <Culture />
      <People />

      <NewsCarousel />
    </>
  );
}

export default Home;
