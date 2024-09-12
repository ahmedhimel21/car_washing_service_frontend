import Navigation from "../components/ui/Header";
import Hero from "../components/modules/Home/Hero";
import FeaturedServices from "../components/modules/Home/FeaturedServices";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Hero></Hero>
      <FeaturedServices></FeaturedServices>
    </div>
  );
};

export default Home;
