import AdminDashboard from "../pages/Admin/AdminDashboard";
import BookingManagement from "../pages/Admin/BookingManagement";
import ServiceManagement from "../pages/Admin/ServiceManagement";
import SlotManagement from "../pages/Admin/SlotManagement";
import UserManagement from "../pages/Admin/UserManagement";

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
    children: [
      {
        name: "Booking Management",
        path: "bookingManagement",
        element: <BookingManagement></BookingManagement>,
      },
      {
        name: "Manage User",
        path: "userManagement",
        element: <UserManagement></UserManagement>,
      },
    ],
  },
];
