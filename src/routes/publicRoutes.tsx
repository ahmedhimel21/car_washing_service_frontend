import Booking from "../pages/Booking/Booking";
import EnvironmentalPage from "../pages/EnvironmentPage";
import Home from "../pages/Home";
import Reviews from "../pages/Reviews";
import ServiceDetails from "../pages/ServiceDetails";
import Services from "../pages/Services";

export const publicPaths = [
  {
    name: "Home",
    index: true,
    element: <Home></Home>,
  },
  {
    name: "Service Details",
    path: "services/:id",
    element: <ServiceDetails></ServiceDetails>,
  },
  {
    name: "We Cares",
    path: "environment",
    element: <EnvironmentalPage></EnvironmentalPage>,
  },
  {
    name: "Reviews",
    path: "reviews",
    element: <Reviews></Reviews>,
  },
  {
    name: "Services",
    path: "services",
    element: <Services></Services>,
  },
  {
    name: "Booking",
    path: "booking/:id/:slot/:slotId",
    element: <Booking></Booking>,
  },
];
