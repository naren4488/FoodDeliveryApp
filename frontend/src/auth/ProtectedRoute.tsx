import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // const { isAuthenticated } = useAuth0();
  // return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    // console.log("isLoading called");
    return null;
  }
  if (isAuthenticated) {
    // console.log("isauthenticated true hua h just");
    return <Outlet />;
  }
  // console.log(
  //   "is authenticated",
  //   isAuthenticated,
  //   "outside loading & isauthenticated",
  // );
  return <Navigate to="/" replace />;
};

export default ProtectedRoute;
