// Libs
import { FC, useContext } from "react";
import { Navigate, Outlet } from "react-router";

// Context 
import { UserContext } from "../../context/User/UserContext";

export const Protected: FC = () => {
  const { user } = useContext(UserContext); 
  console.log(user);

  return user ? <Outlet /> : <Navigate to="/login"/>; 
}