import { ReactNode } from "react";
import Booking from "../pages/Booking";
import Home from "../pages/Home";
import ServiceDetails from "../pages/ServiceDetails";
import Services from "../pages/Services";

type TPublicRoutes = {
  path?: string;
  element: ReactNode;
  index?: boolean;
};

const publicPaths = [
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

export const publicRoutes = publicPaths.reduce((acc: TPublicRoutes[], item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }
  if (item.index) {
    acc.push({
      index: item.index,
      element: item.element,
    });
  }

  return acc;
}, []);
