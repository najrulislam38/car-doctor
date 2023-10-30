import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const { pathname } = useLocation();

  console.log(pathname);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }
  return <Navigate to={"/login"} state={pathname} replace></Navigate>;
};

export default PrivateRoute;
