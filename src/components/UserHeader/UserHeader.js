import React, { useState} from "react"
//import { useNavigate } from "react-router-dom"
//import axios from "../api/axios"
// import {
//   BsCaretDownFill,
// } from "react-icons/bs"


import { FaUser } from "react-icons/fa"
import { IoIosSearch } from "react-icons/io"
//import useAuth from "../hooks/useAuth"

const UserHeader = ({ page, setQuery }) => {
  const [user, setUser] = useState({})
  //const { auth } = useAuth()
  //const navigate = useNavigate()
  //const [isOpen, setIsOpen] = useState(false)

  
  return (
    <nav className="sticky top-0 w-full flex items-center justify-between h-16 px-8 bg-[#F7F9FD] rounded-full">
      <form className="relative sm:w-1/2 w-2/5 flex items-center">
        <input
          type="search"
          name="search"
          onChange={event => setQuery(event.target.value)}
          placeholder="Search"
          className="w-ful bg-[#ECEBEB] pl-8 pr-4 py-2 rounded-full border-none text-black text-sm outline-none focus-within:ring-2 focus-within:ring-blue4500 placeholder:text-gray-400"
        />
        <IoIosSearch className="w-5 h-5 absolute left-2.5 text-black cursor-pointer" />
      </form>

      <div className="flex items-start text-gray-500 sm:space-x-4 space-x-2">
       
        <span
          className="flex flex-col items-center justify-center hover:text-gray-800 cursor-pointer relative"
        >
          <span className="w-6 h-6 flex justify-center rounded-full bg-gray-300 relative">
          {user?.avatar ? (
              <img
                crossOrigin="anonymous"
                src={`${process.env.REACT_APP_BASE_URL}storage/images/${user?.avatar}`}
                className="w-full h-full object-center rounded-full"
                alt=" "
              />
            ) : (
              <FaUser
                size={16}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
              />
            )}
          </span>
        </span>
      </div>
    </nav>
  )
}

export default UserHeader