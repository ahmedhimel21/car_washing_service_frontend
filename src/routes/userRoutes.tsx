import { ReactNode } from "react";
import UserDashboard from "../pages/user/UserDashboard";
import { NavLink } from "react-router-dom";

type TUserRoutes = {
  path: string;
  element: ReactNode;
};

type TUserSidebarRoutes = {
  key: string;
  label: ReactNode;
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

export const userSidebarItems = userPaths.reduce(
  (acc: TUserSidebarRoutes[], item) => {
    if (item.name && item.path) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/user/${item.path}`}>{item.name}</NavLink>,
      });
    }
    return acc;
  },
  []
);
