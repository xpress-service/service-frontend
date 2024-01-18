import { useEffect, useState } from "react"
import { useParams, Outlet, useNavigate, Navigate } from "react-router-dom"
import axios from "../../api/axios"
import Loading from "../Loading/Loading"

const VerifyUserRole = () => {
  const [data, setData] = useState()
  let params = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()

    const request = {
      signal: controller.signal,
    }

    const getData = async () => {
      const res = await axios
        .get(`users/verify-user/${params?.verificationCode}`, request)
        .catch(error => {
          console.error(error?.response)
        })
      if (res) {
        // isMounted && navigate("/user-login")
        isMounted && window.close()
      }
    }

    getData()

    return () => {
      isMounted = false
      controller.abort()
    }
  }, [])

  return <Loading />
}

export default VerifyUserRole
