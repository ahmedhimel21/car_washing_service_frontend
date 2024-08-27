import { ReactNode } from "react";

type TUserRoute = {
  path?: string;
  element: ReactNode;
  index?: boolean;
};
type TUserPath = {
  name: string;
  path?: string;
  element: ReactNode;
  index?: boolean;
};

export const routesGenerator = (items: TUserPath[]) => {
  const routes = items.reduce((acc: TUserRoute[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
    if (item.index) {
      acc.push({
        index: item.index,
        element: item.element,
      });
    }
    return acc;
  }, []);
  return routes;
};
