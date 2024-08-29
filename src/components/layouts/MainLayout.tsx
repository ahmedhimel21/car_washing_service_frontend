import { Button, Layout, Menu, MenuProps } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { userRole } from "./DashboardLayout";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";

const { Header, Content, Footer } = Layout;

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
  const name = useAppSelector((state) => state.auth.user?.name);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
        {name ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <p
              style={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              Hi, {name}
            </p>
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        ) : (
          <Button>
            {" "}
            <NavLink to="/auth/login">Login</NavLink>
          </Button>
        )}
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <div
          style={{
            minHeight: 280,
            padding: 24,
          }}
        >
          <Outlet></Outlet>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default MainLayout;
