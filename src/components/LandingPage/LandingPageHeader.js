import React, { useState } from "react";
import logo from "../../icons/logo.svg";
import { Link } from "react-router-dom";

export const LandingPageHeader = () => {
  const [activePage, setActivePage] = useState("Home"); // Initialize active page

  return (
    <div className="flex flex-row sm:flex-wrap justify-between w-full shadow-sm bg-white py-4 px-2 items-center">
      
        <img src={logo} alt="logo" />
        <div className="flex items-center">
        <ul className="sm:flex-wrap md:flex flex-row gap-8 py-2 justify-center items-center">
          <li
            className={`text-md font-bold ${
              activePage === "Home" ? "text-amber-600" : ""
            }`}
            onClick={() => setActivePage("Home")}
          >
            Home
          </li>
          <li
            className={`font-bold ${
              activePage === "Book" ? "text-amber-600" : ""
            }`}
            onClick={() => setActivePage("Book")}
          >
            Book
          </li>
          <li
            className={`font-bold ${
              activePage === "Notification" ? "text-amber-600" : ""
            }`}
            onClick={() => setActivePage("Notification")}
          >
            Notification
          </li>
          <li
            className={`font-bold ${
              activePage === "History" ? "text-amber-600" : ""
            }`}
            onClick={() => setActivePage("History")}
          >
            History
          </li>
         <Link to='/about'> <li
            className={`font-bold ${
              activePage === "About Us" ? "text-amber-600" : ""
            }`}
            onClick={() => setActivePage("About Us")}
          >
            About Us
          </li>
          </Link>
        </ul>
      </div>

      <div className="flex items-center mt-2 md:mt-0 md:flex-wrap gap-4 pr-4">
        <Link to='/user-login'><button className="text-md text-black border-collapse">Login</button></Link>
        <Link to='/user-login'><p className="text-md text-white bg-amber-600 border rounded-3xl py-1 px-3 md:px-4">
          Get Started
        </p>
        </Link>
      </div>
    </div>
  );
};

export default LandingPageHeader;
