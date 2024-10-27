import { zodResolver } from "@hookform/resolvers/zod";
import CForm from "../../components/form/CForm";
import { registrationValidationSchema } from "../../schemas/registrationValidationSchema";
import { FieldValues } from "react-hook-form";
import CInput from "../../components/form/CInput";
import { Button, Col, Row } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../redux/features/auth/authEndpoints";
import { toast } from "sonner";
import { TError } from "../../types";

// importing css
import "./auth.css";
import { FaBackward } from "react-icons/fa";

const Register = () => {
  // registration mutation
  const [register] = useRegisterMutation();
  // use navigate hook
  const navigate = useNavigate();
  // handle registration fu
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("User registration processing...");
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      role: "user",
      phone: data.phone,
      address: data.address,
    };
    try {
      const res = await register(userInfo).unwrap();
      navigate("/login");
      toast.success(res?.message, { id: toastId });
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
        <img src={"/logo.png"} alt="Logo" className="logo" />{" "}
        <FaBackward></FaBackward>{" "}
      </NavLink>
      <Row className="login-page" style={{ minHeight: "100vh" }}>
        {/* Left Section - Sign up Form */}
        <Col xs={24} md={12} className="login-col-left">
          <div className="login-form-container">
            <h2 className="login-title">Sign Up</h2>
            {/* Sing up Form */}
            <CForm
              onSubmit={onSubmit}
              resolver={zodResolver(registrationValidationSchema)}
            >
              <CInput type="text" name="name" label="Name"></CInput>
              <CInput type="email" name="email" label="Email"></CInput>
              <CInput type="password" name="password" label="Password"></CInput>
              <CInput type="text" name="phone" label="Phone"></CInput>
              <CInput type="text" name="address" label="Address"></CInput>
              <Button
                className="btn btn-accent btn-lg rounded-md"
                htmlType="submit"
              >
                Sing Up
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
            <NavLink to="/login">
              <button className="signup-button">Sign In</button>
            </NavLink>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
