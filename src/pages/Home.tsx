import Navigation from "../components/ui/Header";
import Hero from "../components/modules/Home/Hero";
import FeaturedServices from "../components/modules/Home/FeaturedServices";
import Testimonial from "../components/modules/Home/Testimonial";
import Footer from "../components/ui/Footer";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Hero></Hero>
      <FeaturedServices></FeaturedServices>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
};

export default Home;
