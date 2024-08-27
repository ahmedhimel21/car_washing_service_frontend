import { ReactNode } from "react";
import UserDashboard from "../pages/user/UserDashboard";
import { NavLink } from "react-router-dom";

type TUserSidebarRoutes = {
  key: string;
  label: ReactNode;
};

export const userPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <UserDashboard></UserDashboard>,
  },
];

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
