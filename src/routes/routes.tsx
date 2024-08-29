import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DashboardLayout from "../components/layouts/DashboardLayout";
import AuthLayout from "../components/layouts/AuthLayout";
import { adminPaths } from "./adminRoutes";
import { userPaths } from "./userRoutes";
import { authPaths } from "./authRoutes";
import { publicPaths } from "./publicRoutes";
import { routesGenerator } from "../utils/routesGenerator";
import ProtectedRoutes from "../components/layouts/ProtectedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: routesGenerator(publicPaths),
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoutes>
        <DashboardLayout></DashboardLayout>
      </ProtectedRoutes>
    ),
    children: routesGenerator(adminPaths),
  },
  {
    path: "/user",
    element: (
      <ProtectedRoutes>
        <DashboardLayout></DashboardLayout>
      </ProtectedRoutes>
    ),
    children: routesGenerator(userPaths),
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: routesGenerator(authPaths),
  },
]);

export default router;
