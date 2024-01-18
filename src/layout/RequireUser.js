import { useLocation, Navigate, Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const RequireUser = ({ allowedRole }) => {
  const { auth } = useAuth()
  const location = useLocation()

  return allowedRole.includes(auth?.role) ? (
    <Outlet />
  ) : (
    <Navigate to="/user-login" state={{ prevURL: location.pathname }} />
  )
}

export default RequireUser
