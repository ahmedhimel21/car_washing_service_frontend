import ManageProfile from "../pages/user/ManageProfile";
import UserDashboard from "../pages/user/UserDashboard";

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
