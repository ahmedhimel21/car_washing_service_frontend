import CancelPage from "../components/ui/Cancel";
import FailPage from "../components/ui/Fail";
import SuccessPage from "../components/ui/Success";
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
    name: "Service Details",
    path: "services/:id",
    element: <ServiceDetails></ServiceDetails>,
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
  {
    name: "Success",
    path: "payment/success",
    element: <SuccessPage></SuccessPage>,
  },
  {
    name: "Fail",
    path: "payment/fail",
    element: <FailPage></FailPage>,
  },
  {
    name: "Success",
    path: "payment/cancel",
    element: <CancelPage></CancelPage>,
  },
];
