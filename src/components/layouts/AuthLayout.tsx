import { Layout, Menu } from "antd";
import { items } from "./MainLayout";
import { Outlet } from "react-router-dom";

const { Header, Content } = Layout;

const AuthLayout = () => {
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
    </Layout>
  );
};

export default AuthLayout;
