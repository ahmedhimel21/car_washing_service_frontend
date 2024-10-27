import Navigation from "../components/ui/Header";
import Hero from "../components/modules/Home/Hero";
import FeaturedServices from "../components/modules/Home/FeaturedServices";
import Testimonial from "../components/modules/Home/Testimonial";
import Footer from "../components/ui/Footer";
import Review from "../components/modules/Home/Review";
import BackToTopBtn from "../components/ui/BackToTopBtn";
import AboutUs from "../components/modules/Home/AboutUs";

const Home = () => {
  return (
    <div className="max-w-[1920px] bg-white mx-auto relative">
      <Navigation></Navigation>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <FeaturedServices></FeaturedServices>
      <Review></Review>
      <Testimonial></Testimonial>
      <Footer></Footer>
      <BackToTopBtn></BackToTopBtn>
    </div>
  );
};

export default Home;
