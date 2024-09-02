import { RootState } from "@/redux/Feature/store";
import { useAppSelector } from "@/redux/hook";
import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  const { user } = useAppSelector((state: RootState) => state.auth);

  if (!user) {
    return <Navigate to="/signIn" />;
  }

  return <>{children}</>;
}
