/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authEndpoints";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";
import { NavLink, useNavigate } from "react-router-dom";
import CInput from "../../components/form/CInput";
import CForm from "../../components/form/CForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "../../schemas/loginValidationSchema";
import { TError } from "../../types";
import "./auth.css";
import { FaBackward } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const dispatch = useAppDispatch();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in...");
    try {
      const res = await login(data).unwrap();
      dispatch(
        setUser({
          user: res.data.user,
          token: res.data.accessToken,
        })
      );
      navigate(`/`);
      toast.success("Logged in", { id: toastId });
    } catch (err) {
      toast.error((err as TError).data.message, { id: toastId });
    }
  };

  return (
    <div className="login-page-container">
      <NavLink
        to="/"
        className="logo-container flex justify-center items-center"
      >
        <img src={"/logo.png"} alt="Logo" className="logo" />
        <FaBackward></FaBackward>{" "}
      </NavLink>

      <Row className="login-page" style={{ minHeight: "100vh" }}>
        {/* Left Section - Sign In Form */}
        <Col xs={24} md={12} className="login-col-left">
          <div className="login-form-container">
            <h2 className="login-title">Sign in</h2>

            {/* Login Form */}
            <CForm
              resolver={zodResolver(loginValidationSchema)}
              onSubmit={onSubmit}
            >
              <CInput
                type="email"
                initialValue={"demo@gmail.com"}
                name="email"
                label="Email"
              ></CInput>
              <CInput
                type="password"
                name="password"
                initialValue={"default-pass"}
                label="Password"
              ></CInput>
              <Button
                className="btn btn-accent btn-lg rounded-md"
                htmlType="submit"
              >
                Login
              </Button>
            </CForm>
          </div>
        </Col>

        {/* Right Section - Signup Info */}
        <Col xs={24} md={12} className="login-col-right">
          <div className="signup-container">
            <h2 className="welcome-text">Hello</h2>
            <p className="welcome-subtext">
              Enter your personal details and start your journey AquaClean
            </p>
            <NavLink to="/register">
              <button className="signup-button">Sign Up</button>
            </NavLink>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
