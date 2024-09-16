import Navigation from "../components/ui/Header";
import Hero from "../components/modules/Home/Hero";
import FeaturedServices from "../components/modules/Home/FeaturedServices";
import Testimonial from "../components/modules/Home/Testimonial";
import Footer from "../components/ui/Footer";
import Review from "../components/modules/Home/Review";

const Home = () => {
  return (
    <>
      <Navigation></Navigation>
      <Hero></Hero>
      <FeaturedServices></FeaturedServices>
      <Review></Review>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </>
  );
};

export default Home;
