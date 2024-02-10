import { useLocation, Navigate, Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const RequireAdmin = ({ allowedRole }) => {
  const { auth } = useAuth()
  const location = useLocation()

  return allowedRole.includes(auth?.role) ? (
    <Outlet />
  ) : (
    <Navigate to="/admin-login" state={{ prevURL: location.pathname }} />
  )
}

export default RequireAdmin
