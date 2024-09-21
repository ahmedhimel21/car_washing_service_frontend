import { Layout, MenuProps } from "antd";
import { NavLink, Outlet } from "react-router-dom";
// import { userRole } from "./DashboardLayout";
import { useAppSelector } from "../../redux/hooks";

const { Content } = Layout;

let role;
console.log(role);

export const items: MenuProps["items"] = [
  {
    key: "Home",
    label: <NavLink to="/">Home</NavLink>,
  },
  {
    key: "Services",
    label: <NavLink to="/services">Services</NavLink>,
  },
];

const MainLayout = () => {
  const user = useAppSelector((state) => state?.auth?.user);
  role = user?.role;
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
