import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { ReactNode } from "react";

const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
  const { token } = useAppSelector((state) => state.auth);
  if (!token) {
    return <Navigate to="/auth/login" replace={true}></Navigate>;
  }

  return children;
};

export default ProtectedRoutes;
