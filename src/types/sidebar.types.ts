import { ReactNode } from "react";

export type TSidebarRoutes = {
  key: string;
  label: ReactNode;
};

export type TSidebarItems = {
  name: string;
  path: string;
  element: ReactNode;
};
