import Hero from "./HeroSection/Hero";
import Services from "./TheServices/Services";

const Home = () => {
  return (
    <>
      {/* <div className={style.homeMain}>
        <h1>Edito Farm</h1>
        <h3>Nurturing words, harvesting clarity, cultivating quality.</h3>
      </div> */}

      <Hero />
      <Services />
    </>
  );
};

export default Home;
