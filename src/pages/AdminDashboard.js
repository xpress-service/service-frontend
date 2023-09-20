// src/components/BookingsTable.js
import React, {useState} from 'react';
import AdminSideNav from '../components/AdminSideNav/AdminSideNav';
import AdminHeader from '../components/AdminHeader/AdminHeader';
import { FaUser } from "react-icons/fa"

const AdminDashboard = ({ bookings }) => {
  const [user, setUser] = useState({})
  return (
    <div className='flex mt-6 bg-[#FF9B05] w-full'>
      <div className='mx-5 my-5'>
      <AdminSideNav/>
      </div>
      <div className='flex-1 flex flex-col conatiner w-full  mt-4'>
        <div className='ml-4 mr-5'>
      <AdminHeader/>
      </div>
      <div className='flex'>
      <div className="w-3/5 p-4">
      <div className="bg-[#F4F4F4] shadow-md rounded-2xl overflow-hidden">
        <h2 className='font-bold text-xl mx-4 my-2'>BOOKINGS PENDING</h2>
      <table className="border border-seperate min-w-full bg-white border-spacing-4">
      <thead>
        <tr className='border border-seperate border-spacing-2 bg-white'>
          <th className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
            Id
          </th>
          <th className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
            Name
          </th>
          <th className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
            Status
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
            Service
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
            Price
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className='border border-seperate border-spacing-4'>
        <td className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
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
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider mb-1">
            Joseph John
          </td>
          <td className="bg-white px-4 py-2  text-center text-xs leading-4 font-medium  uppercase tracking-wider">
            <span className='rounded-full bg-[#F8DEB8] text-[#6A4A1B] px-4 py-2'>Pending</span>
          </td>
          <td className="px-6 py-3 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider">
            Laundry Service
          </td>
          <td className="px-6 py-3 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider">
            N2,500
          </td>
          <td className="px-6 py-3 bg-white text-center text-xs leading-4 font-medium text-black  tracking-wider">
            ...
          </td>

        </tr>
        <tr  className='border border-seperate border-spacing-4'>
        <td className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
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
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            Jerry Noah
          </td>
          <td className="px-4 py-2 bg-white text-center text-xs leading-4 font-medium uppercase tracking-wider">
          <span className='rounded-full bg-[#F8DEB8] text-[#6A4A1B] px-4 py-2'>Pending</span>
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            Home Tutors
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            N5000
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            ...
          </td>

        </tr>
        <tr  className='border border-seperate border-spacing-4'>
        <td className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
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
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            Vanessa Joe
          </td>
          <td className="px-4 py-2 bg-white text-center text-xs leading-4 font-medium  uppercase tracking-wider">
          <span className='rounded-full bg-[#F8DEB8] text-[#6A4A1B] px-4 py-2'>Pending</span>
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            Make Up
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            N3,500
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            ...
          </td>

        </tr>
        <tr  className='border border-seperate border-spacing-4'>
        <td className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
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
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            Joseph John
          </td>
          <td className=" px-4 py-2 bg-white text-center text-xs leading-4 font-medium  uppercase tracking-wider">
          <span className='rounded-full bg-[#F8DEB8] text-[#6A4A1B] px-4 py-2'>Pending</span>
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            Car Repair
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            N7,800
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            ...
          </td>

        </tr>
        {/* Add table rows here */}
      </tbody>
    </table>
    </div>
    </div>

    <div className="w-2.5/5 p-4">
    <div className="bg-[#F4F4F4] shadow-md rounded-2xl overflow-hidden">
        <h2 className='font-bold text-xl mx-4 my-2'>BOOKINGS CANCELLED</h2>
      <table className="border border-seperate min-w-full bg-white border-spacing-4">
      <thead>
        <tr className='border border-seperate border-spacing-2 bg-white'>
          <th className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
            Id
          </th>
          <th className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
            Name
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
            Service
          </th>
          <th className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className='border border-seperate border-spacing-4'>
        <td className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
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
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            Joseph John
          </td>
          <td className="px-6 py-3 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider">
            Laundry Service
          </td>
          <td className="bg-white px-4 py-2  text-center text-xs leading-4 font-medium  uppercase tracking-wider">
          <span className='rounded-full bg-[#FBDBD1] text-[#664B42] px-4 py-2'>Cancel</span>
          </td>
          <td className="px-6 py-3 bg-white text-center text-xs leading-4 font-medium text-black  tracking-wider">
            ...
          </td>

        </tr>
        <tr  className='border border-seperate border-spacing-4'>
        <td className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
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
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            Jerry Noah
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            Home Tutors
          </td>
          <td className="px-4 py-2 bg-white text-center text-xs leading-4 font-medium uppercase tracking-wider">
          <span className='rounded-full bg-[#FBDBD1] text-[#664B42] px-4 py-2'>Cancel</span>
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            ...
          </td>

        </tr>
        <tr  className='border border-seperate border-spacing-4'>
        <td className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
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
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            Vanessa Joe
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            Make Up
          </td>
          <td className="px-4 py-2 bg-white text-center text-xs leading-4 font-medium  uppercase tracking-wider">
          <span className='rounded-full bg-[#FBDBD1] text-[#664B42] px-4 py-2'>Cancel</span>
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            ...
          </td>

        </tr>
        <tr  className='border border-seperate border-spacing-4'>
        <td className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
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
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            Joseph John
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            Car Repair
          </td>
          <td className=" px-4 py-2 bg-white text-center text-xs leading-4 font-medium  uppercase tracking-wider">
          <span className='rounded-full bg-[#FBDBD1] text-[#664B42] px-4 py-2'>Cancel</span>
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            ...
          </td>

        </tr>
        {/* Add table rows here */}
      </tbody>
    </table>
    </div>
    </div>

    
    </div>

    <div className='flex'>
      <div className="w-3/5 p-4">
      <div className="bg-[#F4F4F4] shadow-md rounded-2xl">
        <h2 className='font-bold text-xl mx-4 my-2'>BOOKINGS CONFIRMED</h2>
      <table className="border border-seperate min-w-full bg-white border-spacing-4">
      <thead>
        <tr className='border border-seperate border-spacing-2 bg-white'>
          <th className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
            Id
          </th>
          <th className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
            Name
          </th>
          <th className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
            Status
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
            Service
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
            Price
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className='border border-seperate border-spacing-4'>
        <td className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
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
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            Joseph John
          </td>
          <td className="bg-white px-4 py-2  text-center text-xs leading-4 font-medium  uppercase tracking-wider">
            <span className='rounded-full bg-[#CDFFD2] text-[#6C7468] px-4 py-2'>Completed</span>
          </td>
          <td className="px-6 py-3 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider">
            Laundry Service
          </td>
          <td className="px-6 py-3 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider">
            N2,500
          </td>
          <td className="px-6 py-3 bg-white text-center text-xs leading-4 font-medium text-black  tracking-wider">
            ...
          </td>

        </tr>
        <tr  className='border border-seperate border-spacing-4'>
        <td className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
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
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            Jerry Noah
          </td>
          <td className="px-4 py-2 bg-white text-center text-xs leading-4 font-medium uppercase tracking-wider">
          <span className='rounded-full bg-[#CDFFD2] text-[#6C7468] px-4 py-2'>Completed</span>
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            Home Tutors
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            N5000
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            ...
          </td>

        </tr>
        <tr  className='border border-seperate border-spacing-4'>
        <td className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
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
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            Vanessa Joe
          </td>
          <td className="px-4 py-2 bg-white text-center text-xs leading-4 font-medium  uppercase tracking-wider">
          <span className='rounded-full bg-[#CDFFD2] text-[#6C7468] px-4 py-2'>Completed</span>
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            Make Up
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            N3,500
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            ...
          </td>

        </tr>
        <tr  className='border border-seperate border-spacing-4'>
        <td className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
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
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            Joseph John
          </td>
          <td className=" px-4 py-2 bg-white text-center text-xs leading-4 font-medium  uppercase tracking-wider">
          <span className='rounded-full bg-[#CDFFD2] text-[#6C7468] px-4 py-2'>Completed</span>
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            Car Repair
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            N7,800
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            ...
          </td>

        </tr>
        {/* Add table rows here */}
      </tbody>
    </table>
    </div>
    </div>

    <div className="w-2.5/5 p-4">
    <div className="bg-[#F4F4F4] shadow-md rounded-2xl overflow-hidden">
        <h2 className='font-bold text-xl mx-4 my-2'>BOOKINGS FINISHED</h2>
      <table className="border border-seperate min-w-full bg-white border-spacing-4">
      <thead>
        <tr className='border border-seperate border-spacing-2 bg-white'>
          <th className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
            Id
          </th>
          <th className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
            Name
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
            Service
          </th>
          <th className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className='border border-seperate border-spacing-4'>
        <td className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
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
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            Joseph John
          </td>
          <td className="px-6 py-3 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider">
            Laundry Service
          </td>
          <td className="bg-white px-4 py-2  text-center text-xs leading-4 font-medium  uppercase tracking-wider">
          <span className='rounded-full bg-[#CDFFD2] text-[#2E190E] px-4 py-2'>Finish</span>
          </td>
          <td className="px-6 py-3 bg-white text-center text-xs leading-4 font-medium text-black  tracking-wider">
            ...
          </td>

        </tr>
        <tr  className='border border-seperate border-spacing-4'>
        <td className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
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
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            Jerry Noah
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            Home Tutors
          </td>
          <td className="px-4 py-2 bg-white text-center text-xs leading-4 font-medium uppercase tracking-wider">
          <span className='rounded-full bg-[#CDFFD2] text-[#2E190E] px-4 py-2'>Finish</span>
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            ...
          </td>

        </tr>
        <tr  className='border border-seperate border-spacing-4'>
        <td className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
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
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            Vanessa Joe
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            Make Up
          </td>
          <td className="px-4 py-2 bg-white text-center text-xs leading-4 font-medium  uppercase tracking-wider">
          <span className='rounded-full bg-[#CDFFD2] text-[#2E190E] px-4 py-2'>Finish</span>
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            ...
          </td>

        </tr>
        <tr  className='border border-seperate border-spacing-4'>
        <td className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
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
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            Joseph John
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            Car Repair
          </td>
          <td className=" px-4 py-2 bg-white text-center text-xs leading-4 font-medium  uppercase tracking-wider">
          <span className='rounded-full bg-[#CDFFD2] text-[#2E190E] px-4 py-2'>Finish</span>
          </td>
          <td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
            ...
          </td>

        </tr>
        {/* Add table rows here */}
      </tbody>
    </table>
    </div>
    </div>
    </div>
    
    </div>
    </div> 
  );
};

export default AdminDashboard;