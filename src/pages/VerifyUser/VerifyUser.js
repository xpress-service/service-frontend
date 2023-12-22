import { useState } from "react"
import * as yup from "yup"
import { useFormik } from "formik"
import axios from "../../api/axios"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

const validationSchema = yup.object({
  verification_code: yup
    .string("Enter your verification code.")
    .required("This field is required"),
})

const VerifyUser = () => {
  const [message, setMessage] = useState("")
  const [isVerified, setIsVerified] = useState(false)
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      verification_code: "",
    },
    validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { resetForm }) => {
      const res = await axios
        .post("users/verify-user", {
          verification_code: values.verification_code,
        })
        .catch(err => {
          console.error(err.response)
          setMessage(err.response.data.message)
        })
      if (res) {
        resetForm()
        Swal.fire({
          toast: true,
          icon: "success",
          title:
            "Verification was successful! Your account details have been sent to your email.",
          position: "top",
          timer: 3000,
          showConfirmButton: false,
        })

        setIsVerified(true)
      }
    },
  })


  if (isVerified) {
    return (
      <div className="h-screen bg-slate-200 w-screen relative flex justify-center items-center">
        <div className="background">
          <div className="absolute top-4 left-4">
            <div className="h-24 w-24">
              <img src={require("../../assets/logopic.png")} alt="" />
            </div>
          </div>

          <div className="px-16 py-32">
            <p className="text-black">
              Your account has been verified successfully. Kindly check your
              email for your login details.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen bg-slate-200 w-screen relative flex justify-center items-center">
      <div className="background">
        <div className="absolute top-4 left-4">
          <div className="h-24 w-24">
            <img src={require("../../assets/logopic.png")} alt="" />
          </div>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="flex justify-center items-center flex-col w-screen h-screen"
        >
          <div className="bg-white px-10 py-6 rounded-xl shadow-md max-w-sm">
            <div className="space-y-3">
              <h1 className="text-center text-2xl font-semibold text-gray-600">
                Verify Email
              </h1>
              <div>
                {message ? (
                  <p className="text-danger text-red-600 text-base">
                    {message}
                  </p>
                ) : null}
              </div>

              {/**verification code */}
              <div className="mt-4">
                <label
                  htmlFor="verification_code"
                  className="block text-gray-600 font-semibold text-xl"
                >
                  Verification Code
                </label>
                <input
                  type="text"
                  className="text-black bg-indigo-50 px-4 py-2 outline-none rounded-md w-full text-xl"
                  name="verification_code"
                  value={formik.values.verification_code}
                  onChange={formik.handleChange("verification_code")}
                  onBlur={formik.handleBlur}
                  placeholder="Verification Code"
                  id="verification_code"
                  autoComplete="off"
                />
                <div className="text-danger text-red-600 text-sm">
                  {formik.touched.verification_code &&
                    formik.errors.verification_code}
                </div>
              </div>
            </div>

            <div className="mt-3">
              <button
                className="w-full bg-blue-900 font-semibold py-2 rounded-md text-base tracking-wide"
                onClick={e => {
                  formik.handleSubmit(e)
                }}
              >
                Verify Email
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default VerifyUser
