import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const initialValues = {
    emailOrPhone: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    emailOrPhone: Yup.string().required('Email or phone number is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleLogin = (values) => {
    console.log('Login details:', values);
    // Here you can handle the actual login logic (e.g., sending data to the server)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          <Form className="mt-8 space-y-6 bg-slate-50">
            <div className="rounded-md shadow-sm -space-y-px bg-slate-100">
              <div>
                {/* <label htmlFor="emailOrPhone" className="sr-only">Email or Phone Number</label> */}
                <Field
                  id="emailOrPhone"
                  name="emailOrPhone"
                  type="text"
                  autoComplete="email"
                  placeholder="Email or Phone Number"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
                <ErrorMessage name="emailOrPhone" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="mt-3">
                {/* <label htmlFor="password" className="sr-only">Password</label> */}
                <Field
                  id="password"
                  name="password"
                //   type="password"
                //   autoComplete="current-password"
                  placeholder="password"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>
            </div>
            
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  {/* Add your login icon here if desired */}
                </span>
                Login
              </button>
            </div>
              <div className="flex items-center">
                <p className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  Forgotten password?
                </p>
              </div>
              <div className="text-sm">
                <span className="text-gray-500">Or</span>
              </div>
              <div className="flex items-center">
                <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-stone-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                 >
                 Create an account
                </button>
              </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;