/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex } from "antd";
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
    <Flex justify={"center"} align={"center"}>
      <Col span={6}>
        <CForm
          resolver={zodResolver(loginValidationSchema)}
          onSubmit={onSubmit}
        >
          <CInput type="email" name="email" label="Email"></CInput>
          <CInput type="password" name="password" label="Password"></CInput>
          <p style={{ marginBottom: "15px" }}>
            New to Car Washing Service?{" "}
            <NavLink to="/register">Register</NavLink>
          </p>
          <Button htmlType="submit">Login</Button>
        </CForm>
      </Col>
    </Flex>
  );
};

export default Login;
