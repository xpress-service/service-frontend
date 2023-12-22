// src/components/BookingsTable.js
import React from 'react';
import UserSideNav from '../components/UserSideNav/UserSideNav';
import UserHeader from '../components/UserHeader/UserHeader';
import { useState } from 'react';
import { FaUser } from "react-icons/fa"


const UserProfile = ({ bookings }) => {

    const [user, setUser] = useState({})
  return (
    <div className='flex h-screen bg-[#FF9B05]'>
      <div className='mx-5 my-5'>
      <UserSideNav/>
      </div>
      <div className='flex-1 flex flex-col mt-5'>
        <div className='ml-5 mr-5'>
          <UserHeader/>
      </div>

      <div className='my-4 mx-4'>
      <div className="bg-[#F4F4F4] shadow-md rounded-2xl overflow-hidden">
        <div className='flex justify-between mx-10 bg-white'>
        <div className='flex flex-col bg-white justify-center border border-gray-400 br-4'>
        <span className="w-20 h-20 flex justify-center rounded-full bg-gray-300 relative">
          {user?.avatar ? (
              <img
                crossOrigin="anonymous"
                src={`${process.env.REACT_APP_BASE_URL}storage/images/${user?.avatar}`}
                className="w-full h-full object-center rounded-full"
                alt=" "
              />
            ) : (
              <FaUser
                size={24}
                className="absolute top-center left transform -translate-x-1/2 -translate-y-1/2 text-white"
              />
            )}
          </span>
          <div className='font-bold'>Gabriel Tosin</div>
          <div className='text-[#FF9B05]'>SX8674584</div>
          <div className='text-gray-400'>Joined:25/10/2023</div>

        </div>
        <h3 className='font-medium text-small'>Basic Info</h3>
        <h3>Basic Info</h3>
        </div>
        <label>Email</label>
        <h3>tonsinab8@gmail.com</h3>
        <label>Password</label>
        <h3>xxxxxxxxxx</h3>
        <button>Change Password</button>
        <label>Mobile Number</label>
        <h3>08154625841</h3>
        <label>Birthday</label>
        <h3>21/01/1989</h3>
        <label>Location</label>
        <h3>Lagos, Nigeria</h3>
        <label>Gender</label>
        <h3>Male</h3>
        
      <table className="border border-seperate min-w-full bg-white border-spacing-4">
      <thead>
        <tr className='border border-seperate border-spacing-2 bg-white'>
          <th className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
            Orders
          </th>
          <th className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
            Percentage
          </th>
          <th className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
            View
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className='border border-seperate border-spacing-4'>
          <td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider mb-1">
            Order 1
            <td>Task: Laundry Service</td>
          </td>
          <td className="px-6 py-3 bg-white text-left  text-xs leading-4 font-medium text-black  tracking-wider">
            75%
            <td>
              <span></span>
            </td>
          </td>
          <td className="px-4 py-2 bg-white text-left  text-xs leading-4 font-medium text-black  tracking-wider">
           <button className='text-white bg-[#FF9B05] rounded-lg px-4 py-2'>View</button>
          </td>

        </tr>
        <tr className='border border-seperate border-spacing-4'>
          <td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider mb-1">
            Order 2
            <td>Task: Car Repair</td>
          </td>
          <td className="px-6 py-3 bg-white text-left  text-xs leading-4 font-medium text-black  tracking-wider">
            60%
            <td>
              <span></span>
            </td>
          </td>
          <td className="px-4 py-2 bg-white text-left  text-xs leading-4 font-medium text-black  tracking-wider">
           <button className='text-white bg-[#FF9B05]  rounded-lg px-4 py-2'>View</button>
          </td>

        </tr>
        
        {/* Add table rows here */}
      </tbody>
    </table>
    </div>
    </div>
      
    
    </div>
    </div> 
  );
};

export default UserProfile;