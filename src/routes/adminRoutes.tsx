import { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import ServiceManagement from "../pages/admin/ServiceManagement";
import SlotManagement from "../pages/admin/SlotManagement";
import UserManagement from "../pages/admin/UserManagement";

type TAdminRoute = {
  path: string;
  element: ReactNode;
};

const adminPaths = [
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

export const adminRoutes = adminPaths.reduce((acc: TAdminRoute[], item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }
  return acc;
}, []);
