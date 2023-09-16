import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcSettings } from "react-icons/fc";
import { MdWork, MdAssessment, MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
//import logo from "../assets/logopic_white.png";
//import { SidebarContext } from "../../contexts/SidebarContext";

const AdminSideNav = ({ page }) => {
  const LinkReset = "p-0";
  const currentPage =
    "bg-[#FCE4C0] text-[#FF9B05] font-bold cursor-pointer py-2 px-4 flex items-center w-full border-none";
  const regularPage =
    "text-black font-bold cursor-pointer py-2 px-4 flex items-center w-full hover:bg-slate-50 hover:text-slate-700";

  const navigate = useNavigate();
  //const { showSidebar } = useContext(SidebarContext);
  const [activeLink, setActiveLink] = useState("dashboard");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="bg-[#FF9B05]">

      <div className="relative h-[125vh] flex flex-col justify-between rounded-2xl bg-[#F7F9FD] py-4 w-55">
        {/* <Link to="/candidate-dashboard" className={LinkReset}>
          <div className="flex items-center px-2">
            <img src={logo} alt="Edge" className="w-20" />
            <span className="text-lg text-white font-bold">THE EDGE APP</span>
          </div>
        </Link> */}

        <div className="flex flex-col mt-8">
          <Link to="/admin-dashboard" className={LinkReset}>

            <span className={activeLink === "dashboard" ? currentPage : regularPage}  onClick={() => handleLinkClick('dashboard')}>
              <MdDashboard size={24} className="mr-4" /> DASHBOARD
            </span>
          </Link>

          <Link to="/manage" className={LinkReset}>
            <span className={activeLink === "manage" ? currentPage : regularPage} onClick={() => handleLinkClick('manage')}>
              <MdWork size={24} className="mr-4" /> MANAGE
            </span>
          </Link>

          <Link to="/profile" className={LinkReset}>
            <span
              className={activeLink === "profile" ? currentPage : regularPage} onClick={() => handleLinkClick('profile')}
            >
              <CgProfile size={24} className="mr-4" /> PROFILE
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminSideNav;