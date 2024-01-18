import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import useRefreshToken from "../../hooks/useRefreshToken"
import useAuth from "../../hooks/useAuth"
import Loading from "../Loading/Loading"

const PersistLogin = ({ allowedRole }) => {
  const [isLoading, setIsLoading] = useState(true)
  const refresh = useRefreshToken(allowedRole)
  const { auth, persist } = useAuth()

  useEffect(() => {
    let isMounted = true

    const verifyRefreshToken = async () => {
      try {
        await refresh()
      } catch (err) {
        console.error(err)
      } finally {
        isMounted && setIsLoading(false)
      }
    }

    !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false)

    return () => {
      isMounted = false
    }
  }, [])

  return <>{!persist ? <Outlet /> : isLoading ? <Loading /> : <Outlet />}</>
}

export default PersistLogin
