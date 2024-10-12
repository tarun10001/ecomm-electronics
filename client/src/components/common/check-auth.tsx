import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const CheckAuth = ({ isAuthenticated, user, children }) => {
  const location = useLocation();
  const loginPath = location.pathname.includes("/login");
  const registerPath = location.pathname.includes("/register");
  if (!isAuthenticated && !(loginPath || registerPath)) {
    return <Navigate to="/auth/login" />;
  }
  if (isAuthenticated && (loginPath || registerPath)) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop/home" />;
    }
  }

  if (isAuthenticated && user?.role !== 'admin' && location.pathname.includes('admin')) {
    return <Navigate to='/unauth-page' />
  }

  if (isAuthenticated && user?.role === 'admin' && location.pathname.includes('shop')) {
    return <Navigate to='/admin/dashboard' />
  }
  return <>{children}</>;
};

export default CheckAuth;
