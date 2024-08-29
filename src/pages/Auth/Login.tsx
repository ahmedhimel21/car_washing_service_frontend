import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authEndpoints";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

type TFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "user@gmail.com",
      password: "ph-password",
    },
  });

  const onSubmit = async (data: TFormData) => {
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
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="userEmail">Email</label>
          <input type="email" id="email" {...register("email")} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register("password")} />
        </div>
        <Button htmlType="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
