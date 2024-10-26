import { NavLink } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { MenuProps } from "antd";

const NavbarMenuItems = () => {
  const user = useAppSelector((state) => state.auth.user);
  const items: MenuProps["items"] = [
    {
      key: "Home",
      label: <NavLink to="/">Home</NavLink>,
    },
    {
      key: "Services",
      label: <NavLink to="/services">Services</NavLink>,
    },
    {
      key: "Reviews",
      label: <NavLink to="/reviews">Reviews</NavLink>,
    },
  ];
  if (user) {
    items.push({
      key: "Dashboard",
      label: <NavLink to={`/${user?.role}/dashboard`}>Dashboard</NavLink>,
    });
  }
  return items;
};

export default NavbarMenuItems;
