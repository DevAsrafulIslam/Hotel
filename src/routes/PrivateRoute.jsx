import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div>
        <progress className="progress w-56 mx-auto text-center flex align-middle  my-[25%] "></progress>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} replace to="/login"></Navigate>;
};

export default PrivateRoute;
