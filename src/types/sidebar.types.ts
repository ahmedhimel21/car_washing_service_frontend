import { ReactNode } from "react";

export type TAdminSidebarRoutes = {
  key: string;
  label: ReactNode;
};

export type TSidebarItems = {
  name: string;
  path: string;
  element: ReactNode;
};
