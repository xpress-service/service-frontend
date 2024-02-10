import { Link } from "react-router-dom"
import logo from "../../assets/logopic.png"
import { Helmet } from "react-helmet-async"

const ErrorPage = () => {
  return (
    <div className="bg-edgeGradient h-screen py-6 px-4">
      <Helmet>
        <title>404 | ServiceXpress</title>
      </Helmet>
      <nav className="flex items-center">
        <img src={logo} alt="Edge" className="w-20" />
        <span className="text-lg text-white font-bold">THE SERVICEXPRESS APP</span>
      </nav>
      <div className="flex items-center h-1/2 px-8">
        <div className="space-y-2">
          <h2 className="text-4xl">Oops...</h2>
          <p className="text-xl">This page does not exist</p>
          <Link to="/admin-dashboard">
            <button className="py-2 px-4 border border-white text-white rounded-lg mt-4">
              Go to homepage
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
