import { NavLink } from "react-router-dom";
import { TSidebarItems, TSidebarRoutes } from "../types";

export const sidebarItemsGenerator = (items: TSidebarItems[], role: string) => {
  const sidebarItems = items.reduce((acc: TSidebarRoutes[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }
    return acc;
  }, []);
  return sidebarItems;
};
