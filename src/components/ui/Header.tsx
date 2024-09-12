import { logout } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Layout, Menu } from "antd";
import { items } from "../layouts/MainLayout";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const { Header } = Layout;

const Navigation = () => {
  const name = useAppSelector((state) => state.auth.user?.name);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const [header, serHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        serHeader(true);
      } else {
        serHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      className={`${
        header ? "bg-white shadow-md py-2" : "bg-transparent shadow-none py-4"
      } fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300 `}
    >
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "white",
        }}
      >
        <div style={{ flex: 0.5 }}>
          <img src="/logo.png" alt="logo" className="h-12 bg-cover" />
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
        {name ? (
          <button
            className="btn btn-accent h-12 max-w-[100px] flex-1"
            onClick={handleLogout}
          >
            Sign Out
          </button>
        ) : (
          <button className="btn btn-primary h-12 max-w-[100px] flex-1">
            {" "}
            <NavLink to="/login">Sign In</NavLink>
          </button>
        )}
      </Header>
    </div>
  );
};

export default Navigation;
