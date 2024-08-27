import { ReactNode } from "react";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

type TAuthRoutes = {
  path: string;
  element: ReactNode;
};

const authPaths = [
  {
    name: "Login",
    path: "login",
    element: <Login></Login>,
  },
  {
    name: "Register",
    path: "register",
    element: <Register></Register>,
  },
];

export const authRoutes = authPaths.reduce((acc: TAuthRoutes[], item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }
  return acc;
}, []);
