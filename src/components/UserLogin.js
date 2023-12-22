import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const Login = () => {
  const initialValues = {
    emailOrPhone: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    emailOrPhone: Yup.string().required("Email or phone number is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleLogin = (values, { resetForm }) => {
    console.log("Login details:", values);
    // Here you can handle the actual login logic (e.g., sending data to the server)

    // After successful login, reset the form to initial values
    resetForm();
  };

  return (
    <div className="bg-amber-600 min-h-screen flex flex-col">
         <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
           <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full rounded-3xl">
        {/* <p className="cursor-pointer text-lg text-slate-400">X</p> */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          <Form className="mt-8 space-y-6 bg-white">
            <div className="rounded-2xl shadow-sm-space-y-px bg-white">
              <div>
                <Field
                  id="emailOrPhone"
                  name="emailOrPhone"
                  type="text"
                  autoComplete="email"
                  placeholder="Email or Phone Number"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border rounded-3xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-amber-300 focus:z-10 sm:text-sm text-center mb-4"
                />
                <ErrorMessage
                  name="emailOrPhone"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mt-3">
                <Field
                type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border rounded-3xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-amber-300 focus:z-10 sm:text-sm text-center"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            <div>
            <Link to='/user-dashboard'>  <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border rounded-3xl border-transparent text-sm font-medium rounded-md text-white bg-amber-400 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Login
              </button></Link>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-sm font-medium text-amber-600 hover:text-amber-200">
                Forgotten password
              </p>
            </div>

            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                Or
              </p>
            </div>

            <div className="flex items-center">
              <button className="group relative w-full flex justify-center py-2 px-4 border rounded-3xl border-transparent text-sm font-medium rounded-md text-white bg-stone-800 hover:bg-stone-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300">
                Create account
              </button>
            </div>
          </Form>
        </Formik>
      </div>
     </div>
     </div>
  );
};

export default Login;
