import { Navigate, Outlet } from "react-router-dom";

const UserRequiredRoute = ({ user, children, redirectPath="/get-started" }) => {
  if (!user) return <Navigate to={redirectPath} replace />

  return children ? children : <Outlet />
}

export default UserRequiredRoute;
