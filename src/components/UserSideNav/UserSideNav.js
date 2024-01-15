import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdWork, MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const UserSideNav = ({ page }) => {
  const LinkReset = "p-0";
  const currentPage =
    "bg-[#FCE4C0] text-[#FF9B05] font-bold cursor-pointer py-2 px-4 flex items-center w-full border-none";
  const regularPage =
    "text-black font-bold cursor-pointer py-2 px-4 flex items-center w-full hover:bg-slate-50 hover:text-slate-700";

  const [activeLink, setActiveLink] = useState("dashboard");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="h-screen ">
      <div className="h-screen fixed flex flex-col justify-between rounded-2xl bg-[#F7F9FD] py-4 w-55">
        <div className="flex flex-col mt-8">
          <Link to="/user-dashboard" className={LinkReset}>
         
            <span className={activeLink === "user-dashboard" ? currentPage : regularPage}  onClick={() => handleLinkClick('user-dashboard')}>
              <MdDashboard size={24} className="mr-4" /> DASHBOARD
            </span>
          </Link>

          <Link to="/tracking" className={LinkReset}>
            <span className={activeLink === "tracking" ? currentPage : regularPage} onClick={() => handleLinkClick('tracking')}>
              <MdWork size={24} className="mr-4" /> TRACKING
            </span>
          </Link>

          <Link to="/user-profile" className={LinkReset}>
            <span
              className={activeLink === "user-profile" ? currentPage : regularPage} onClick={() => handleLinkClick('user-profile')}
            >
              <CgProfile size={24} className="mr-4" /> PROFILE
            </span>
          </Link>

          <Link to="/transaction" className={LinkReset}>
            <span
              className={activeLink === "transaction" ? currentPage : regularPage} onClick={() => handleLinkClick('transaction')}
            >
              <CgProfile size={24} className="mr-4" /> TRANSACTION
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserSideNav;