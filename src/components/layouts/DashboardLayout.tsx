/* eslint-disable @typescript-eslint/no-explicit-any */
import { Layout, Menu } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { adminPaths } from "../../routes/adminRoutes";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { userPaths } from "../../routes/userRoutes";
import { useAppSelector } from "../../redux/hooks";
const { Header, Content, Sider } = Layout;

export const userRole = {
  ADMIN: "admin",
  USER: "user",
};

const DashboardLayout = () => {
  const role = useAppSelector((state) => state.auth.user?.role);
  let sidebarItems;
  switch (role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.USER:
      sidebarItems = sidebarItemsGenerator(userPaths, userRole.USER);
      break;
    default:
      break;
  }
  return (
    <Layout style={{ height: "100%" }}>
      <Sider
        style={{ position: "sticky", top: "0", left: "0", height: "100vh" }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NavLink to="/">
            <h1 className="text-xl font-bold text-white text-center">🏠Home</h1>
          </NavLink>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sidebarItems as any}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
