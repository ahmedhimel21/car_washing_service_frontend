import Booking from "../pages/Booking";
import Home from "../pages/Home";
import ServiceDetails from "../pages/ServiceDetails";
import Services from "../pages/Services";

export const publicPaths = [
  {
    name: "Home",
    index: true,
    element: <Home></Home>,
  },
  {
    name: "Services",
    path: "services",
    element: <Services></Services>,
  },
  {
    name: "Service Details",
    path: "services/:id",
    element: <ServiceDetails></ServiceDetails>,
  },
  {
    name: "Booking",
    path: "booking",
    element: <Booking></Booking>,
  },
];
