import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import axios from "../api/axios"
import "../styles/Adminlog.css"
import * as yup from "yup"
import { useFormik } from "formik"
import { Box } from "@mui/material"
import usePasswordToggle from "../hooks/usePasswordToggle"
import { BsEye, BsEyeSlash } from "react-icons/bs"
import { Helmet } from "react-helmet-async"

const validationSchema = yup.object({
  first_name: yup
    .string("Enter your first name")
    .required("This field is required")
    .min(3, "First name must be at least 3 characters"),
  last_name: yup
    .string("Enter your last name")
    .required("This field is required")
    .min(3, "Last name must be at least 3 characters"),
  company_name: yup
    .string("Enter your company name")
    .required("This field is required")
    .min(3, "Company name must be at least 3 characters"),
  company_email: yup
    .string("Enter your company email")
    .email("Enter a valid email")
    .required("This field is required"),
  password: yup
    .string("Enter your password")
    .required("This field is required")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  confirm_password: yup
    .string("Confirm your password")
    .required("This field is required")
    .oneOf([yup.ref("password"), null], "Passwords don't match."),
})

const AdminReg = () => {
  const [showPassword, setShowPassword] = useState("false")
  const navigate = useNavigate()
  const [message, setMessage] = useState("")

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      company_name: "",
      company_email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { resetForm }) => {
      const res = await axios
        .post("vendors", {
          first_name: values.first_name,
          last_name: values.last_name,
          company: values.company_name,
          email: values.company_email,
          password: values.password,
          confirm_password: values.confirm_password,
        })
        .catch(err => {
          setMessage(err?.response?.data?.message)
        })
      if (res) {
        resetForm()
        Swal.fire({
          toast: true,
          icon: "success",
          title:
            "Registration Successful! A verification link has been sent to your email.",
          position: "top",
          timer: 3000,
          showConfirmButton: false,
        })
        navigate("/admin-login")
      }
    },
  })

  const show = showPassword ? (
    <BsEyeSlash
      color=" #1E3A8A"
      size={18}
      icon={showPassword ? "eye-slash" : "eye"}
      onClick={() => setShowPassword(visibility => !visibility)}
    />
  ) : (
    <BsEye
      color=" #1E3A8A"
      size={18}
      icon={showPassword ? "eye-slash" : "eye"}
      onClick={() => setShowPassword(visibility => !visibility)}
    />
  )

  const [PasswordInputType, ToggleIcon] = usePasswordToggle()

  return (
    <div className="min-h-screen bg-slate-200 flex overflow-y-auto overflow-x-hidden justify-center items-center w-screen relative py-0">
      <Helmet>
        <title>Sign Up | Edge</title>
      </Helmet>

      <div className="background">
        <div className="absolute top-4 left-4">
          <Link to="/">
            <div className="h-24 w-24">
              <img src={require("../assets/logopic.png")} alt="" />
            </div>
          </Link>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="flex justify-center items-center flex-col w-screen py-16"
        >
          <div className="bg-white px-10 py-4 rounded-xl w-screen shadow-md max-w-sm">
            <div className="space-y-3">
              <h1 className="text-center text-2xl font-semibold text-gray-600">
                Register
              </h1>
              <div>
                {message ? (
                  <p className="text-danger text-red-600 text-sm">{message}</p>
                ) : null}
              </div>

              {/**first name */}
              <div>
                <label
                  htmlFor="first_name"
                  className="block text-gray-600 font-semibold text-base"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="text-black bg-indigo-50 px-4 py-2 outline-none rounded-md w-full text-base"
                  name="first_name"
                  value={formik.values.first_name}
                  onChange={formik.handleChange("first_name")}
                  onBlur={formik.handleBlur}
                  placeholder="First Name"
                  id="first_name"
                  autoComplete="off"
                />
                <div className="text-danger text-red-600 text-sm">
                  {formik.touched.first_name && formik.errors.first_name}
                </div>
              </div>

              {/**last name */}
              <div className="mt-2">
                <label
                  htmlFor="last_name"
                  className="block text-gray-600 font-semibold text-base"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="text-black bg-indigo-50 px-4 py-2 outline-none rounded-md w-full text-base"
                  name="last_name"
                  value={formik.values.last_name}
                  onChange={formik.handleChange("last_name")}
                  onBlur={formik.handleBlur}
                  placeholder="Last Name"
                  id="last_name"
                  autoComplete="off"
                />
                <div className="text-danger text-red-600 text-sm">
                  {formik.touched.last_name && formik.errors.last_name}
                </div>
              </div>

              {/**company name */}
              <div className="mt-2">
                <label
                  htmlFor="company_name"
                  className="block text-gray-600 font-semibold text-base"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  className="text-black bg-indigo-50 px-4 py-2 outline-none rounded-md w-full text-base"
                  name="company_name"
                  value={formik.values.company_name}
                  onChange={formik.handleChange("company_name")}
                  onBlur={formik.handleBlur}
                  placeholder="Company Name"
                  id="company_name"
                  autoComplete="off"
                />
                <div className="text-danger text-red-600 text-sm">
                  {formik.touched.company_name && formik.errors.company_name}
                </div>
              </div>

              {/**company email */}
              <div className="mt-2">
                <label
                  htmlFor="company_email"
                  className="block text-gray-600 font-semibold text-base"
                >
                  Company Email
                </label>
                <input
                  type="email"
                  className="text-black bg-indigo-50 px-4 py-2 outline-none rounded-md w-full text-base"
                  name="company_email"
                  value={formik.values.company_email}
                  onChange={formik.handleChange("company_email")}
                  onBlur={formik.handleBlur}
                  placeholder="Company Email"
                  id="company_email"
                  autoComplete="off"
                />
                <div className="text-danger text-red-600 text-sm">
                  {formik.touched.company_email && formik.errors.company_email}
                </div>
              </div>

              {/**password */}
              <div className="mt-2">
                <label
                  htmlFor="password"
                  className="block text-gray-600 font-semibold text-base"
                >
                  Password
                </label>
                <input
                  type={showPassword ? "password" : "text"}
                  className="text-black bg-indigo-50 px-4 py-2 outline-none rounded-md w-full text-base"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur}
                  placeholder="Password"
                  id="password"
                  autoComplete="off"
                />
                <Box
                  sx={{
                    position: "relative",
                    left: "17rem",
                    bottom: "2rem",
                    cursor: "pointer",
                  }}
                >
                  {show}
                </Box>
                <div className="text-danger text-red-600 text-sm">
                  {formik.touched.password && formik.errors.password}
                </div>
              </div>

              {/**confirm password */}
              <div className="mt-2">
                <label
                  htmlFor="confirm_password"
                  className="block text-gray-600 font-semibold text-base"
                >
                  Confirm Password
                </label>
                <input
                  type={PasswordInputType}
                  className="text-black bg-indigo-50 px-4 py-2 outline-none rounded-md w-full text-base"
                  name="confirm_password"
                  value={formik.values.confirm_password}
                  onChange={formik.handleChange("confirm_password")}
                  onBlur={formik.handleBlur}
                  placeholder="Confirm Password"
                  id="confirm_password"
                  autoComplete="off"
                />
                <Box
                  sx={{
                    position: "relative",
                    left: "17rem",
                    bottom: "2rem",
                    cursor: "pointer",
                  }}
                >
                  {ToggleIcon}
                </Box>
                <div className="text-danger text-red-600 text-sm">
                  {formik.touched.confirm_password &&
                    formik.errors.confirm_password}
                </div>
              </div>

              <div className="mt-2">
                <button
                  type="submit"
                  className="w-full bg-blue-900 font-semibold py-2 rounded-md text-base tracking-wide"
                  onClick={e => {
                    formik.handleSubmit(e)
                  }}
                >
                  Signup
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminReg
