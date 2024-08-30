import { zodResolver } from "@hookform/resolvers/zod";
import CForm from "../../components/form/CForm";
import { registrationValidationSchema } from "../../schemas/registrationValidationSchema";
import { FieldValues } from "react-hook-form";
import CInput from "../../components/form/CInput";
import { Button, Col, Flex } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../redux/features/auth/authEndpoints";
import { toast } from "sonner";
import { TError } from "../../types";

const Register = () => {
  const [register, { error }] = useRegisterMutation();
  console.log("error =>", error);
  const navigate = useNavigate();
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
    <Flex justify={"center"} align={"center"}>
      <Col span={6}>
        <CForm
          onSubmit={onSubmit}
          resolver={zodResolver(registrationValidationSchema)}
        >
          <CInput type="text" name="name" label="Name"></CInput>
          <CInput type="email" name="email" label="Email"></CInput>
          <CInput type="password" name="password" label="Password"></CInput>
          <CInput type="text" name="phone" label="Phone"></CInput>
          <CInput type="text" name="address" label="Address"></CInput>
          <p style={{ marginBottom: "15px" }}>
            Already have account? <NavLink to="/login">Login</NavLink>
          </p>
          <Button htmlType="submit">Sign Up</Button>
        </CForm>
      </Col>
    </Flex>
  );
};

export default Register;
