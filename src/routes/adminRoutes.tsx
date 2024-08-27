import AdminDashboard from "../pages/admin/AdminDashboard";
import ServiceManagement from "../pages/admin/ServiceManagement";
import SlotManagement from "../pages/admin/SlotManagement";
import UserManagement from "../pages/admin/UserManagement";

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