import { ReactNode } from "react";
import UserDashboard from "../pages/user/UserDashboard";

type TUserRoutes = {
  path: string;
  element: ReactNode;
};

const userPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <UserDashboard></UserDashboard>,
  },
];

export const userRoutes = userPaths.reduce((acc: TUserRoutes[], item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }
  return acc;
}, []);
