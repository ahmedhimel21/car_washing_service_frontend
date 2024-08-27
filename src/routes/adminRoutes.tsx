import AdminDashboard from "../pages/admin/AdminDashboard";
import ServiceManagement from "../pages/admin/ServiceManagement";
import SlotManagement from "../pages/admin/SlotManagement";
import UserManagement from "../pages/admin/UserManagement";
import { NavLink } from "react-router-dom";
import { TAdminSidebarRoutes } from "../types";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    name: "Service Management",
    path: "serviceManagement",
    element: <ServiceManagement></ServiceManagement>,
  },
  {
    name: "Slot Management",
    path: "slotManagement",
    element: <SlotManagement></SlotManagement>,
  },
  {
    name: "User Management",
    path: "userManagement",
    element: <UserManagement></UserManagement>,
  },
];

export const adminSidebarItems = adminPaths.reduce(
  (acc: TAdminSidebarRoutes[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
      });
    }
    return acc;
  },
  []
);
