import { logout } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Layout, Menu } from "antd";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import NavbarMenuItems from "../../constant/NavbarMenutems";

const { Header } = Layout;

const Navigation = () => {
  // get user info from local state
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  // logout functionality
  const handleLogout = () => {
    dispatch(logout());
  };

  const [header, serHeader] = useState(false);
  // handle scroll for navigation
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

  const navItems = NavbarMenuItems();

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
        <Link to={"/"} style={{ flex: 1 }}>
          <img src="/logo.png" alt="logo" className="h-12 bg-cover" />
        </Link>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          // items array from main layout
          items={navItems}
          style={{ flex: 1, minWidth: 0 }}
        />
        {/* conditionally rendering `dashboard, signIn and signOut` */}
        {user ? (
          <div className="flex justify-end gap-5 items-center flex-1">
            {/* <NavLink to={`/${user?.role}/dashboard`}>Dashboard</NavLink> */}
            <button
              className="btn btn-accent h-12 max-w-[100px]"
              onClick={handleLogout}
            >
              Sign Out
            </button>
          </div>
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
