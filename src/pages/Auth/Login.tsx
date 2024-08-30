import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authEndpoints";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import CInput from "../../components/form/CInput";
import CForm from "../../components/form/CForm";

const Login = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const dispatch = useAppDispatch();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
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
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <Row justify={"center"} align={"middle"} style={{ height: "100vh" }}>
      <CForm onSubmit={onSubmit}>
        <CInput type="email" name="email" label="Email"></CInput>
        <CInput type="password" name="password" label="Password"></CInput>
        <Button htmlType="submit">Login</Button>
      </CForm>
    </Row>
  );
};

export default Login;
