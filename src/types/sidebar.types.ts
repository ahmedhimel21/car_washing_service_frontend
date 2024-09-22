import { ReactNode } from "react";

export type TSidebarRoutes =
  | {
      key?: string;
      label?: ReactNode;
      children?: TSidebarRoutes[];
    }
  | undefined;

export type TSidebarItems = {
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: TSidebarItems[];
};
