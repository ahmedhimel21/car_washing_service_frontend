import { Layout, MenuProps } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { userRole } from "./DashboardLayout";

const { Content } = Layout;

export const items: MenuProps["items"] = [
  {
    key: "Home",
    label: <NavLink to="/">Home</NavLink>,
  },
  {
    key: "Services",
    label: <NavLink to="services">Services</NavLink>,
  },
  {
    key: "Booking",
    label: <NavLink to="booking">Booking</NavLink>,
  },
  {
    key: "Dashboard",
    label: <NavLink to={`/${userRole.USER}/dashboard`}>Dashboard</NavLink>, //todo
  },
];

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
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
