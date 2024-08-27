import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DashboardLayout from "../components/layouts/DashboardLayout";
import AuthLayout from "../components/layouts/AuthLayout";
import { adminRoutes } from "./adminRoutes";
import { userRoutes } from "./userRoutes";
import { authRoutes } from "./authRoutes";
import { publicRoutes } from "./publicRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: publicRoutes,
  },
  {
    path: "/admin",
    element: <DashboardLayout></DashboardLayout>,
    children: adminRoutes,
  },
  {
    path: "/user",
    element: <DashboardLayout></DashboardLayout>,
    children: userRoutes,
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: authRoutes,
  },
]);

export default router;
