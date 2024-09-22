import { useAppSelector } from "../../redux/hooks";

const AdminDashboard = () => {
  const user = useAppSelector((state) => state.auth.user);
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">
        Welcome Back {user?.name}
      </h1>
    </div>
  );
};

export default AdminDashboard;
