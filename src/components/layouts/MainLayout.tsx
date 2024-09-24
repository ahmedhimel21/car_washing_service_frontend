import { Layout, MenuProps } from "antd";
import { NavLink, Outlet } from "react-router-dom";

const { Content } = Layout;

// eslint-disable-next-line react-refresh/only-export-components
export const items: MenuProps["items"] = [
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

const MainLayout = () => {
  return (
    <Layout style={{ height: "100%" }}>
      <Content style={{ padding: "0 0" }}>
        <div
          style={{
            minHeight: 280,
            padding: 0,
          }}
        >
          <Outlet></Outlet>
        </div>
      </Content>
    </Layout>
  );
};

export default MainLayout;
