import { useLocation, useNavigate } from "react-router-dom"
import axios from "../api/axios"
import useAuth from "./useAuth"

const useRefreshToken = role => {
  const navigate = useNavigate()
  const { setAuth } = useAuth()
  const refreshToken = localStorage.getItem("refresh")
  const location = useLocation()

  const refresh = async () => {
    const response = await axios
      .post("/refreshToken", {
        refreshToken: refreshToken,
      })
      .catch(err => {
        console.error(err.response)
        if (role?.includes("applicant")) {
          navigate("/user-login", {
            state: {
              prevURL: location.pathname,
            },
          })
        }

        if (role?.includes("admin")) {
          navigate("/admin-login", {
            state: {
              prevURL: location.pathname,
            },
          })
        }

        if (role?.includes("superAdmin")) {
          navigate("/admin-login", {
            state: {
              prevURL: location.pathname,
            },
          })
        }
      })

    if (response) {
      if (response.data?.data?.role !== "applicant") {
        setAuth(prev => {
          return {
            ...prev,
            id: response?.data?.data?.id,
            companyId: response?.data?.data?.companyId,
            firstName: response?.data?.data?.firstName,
            email: response?.data?.data?.email,
            accessToken: response?.data?.data?.accessToken,
            role: response?.data?.data?.role,
          }
        })
      } else {
        setAuth(prev => {
          return {
            ...prev,
            id: response?.data?.data?.id,
            role: response?.data?.data?.role,
            accessToken: response?.data?.data?.accessToken,
            email: response?.data?.data?.email,
          }
        })
      }
    }
    return response?.data?.data?.accessToken
  }
  return refresh
}

export default useRefreshToken
