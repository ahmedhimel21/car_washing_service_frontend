import { Layout, Menu, MenuProps } from "antd";
import { NavLink, Outlet } from "react-router-dom";

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
    label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
  },
  {
    key: "Login",
    label: <NavLink to="/auth/login">Login</NavLink>,
  },
];

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              color: "white",
              marginRight: "5px",
              fontWeight: "bold",
            }}
          >
            Hi, {`Himel Ahmed`}
          </p>
          <img
            style={{ borderRadius: "50%", height: "50px", width: "50px" }}
            src="/favicon.jpg"
            alt="profile Image"
          />
        </div>
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
