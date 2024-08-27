import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

export const authPaths = [
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
