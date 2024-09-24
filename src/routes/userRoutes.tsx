import ManageProfile from "../pages/User/ManageProfile";
import UserDashboard from "../pages/User/UserDashboard";

export const userPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <UserDashboard></UserDashboard>,
  },
  {
    name: "Manage Profile",
    path: "manageProfile",
    element: <ManageProfile></ManageProfile>,
  },
];
