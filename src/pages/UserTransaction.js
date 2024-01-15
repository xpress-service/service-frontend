import React from 'react';
import { useState } from 'react';
import { FaUser } from "react-icons/fa"
import UserLayout from '../components/UserLayout/UserLayout';


const UserTransaction = ({ bookings }) => {

    const [user, setUser] = useState({})
  return (
    <UserLayout>
      <div className='my-4 mx-4'>
      <div className="bg-[#F4F4F4] shadow-md rounded-2xl overflow-hidden">
        <div className='flex justify-between mb-4'>
        <div>
            <h2  className='font-bold text-small mx-10 mt-5'>Transaction Details</h2>
            <h3 className='font-bold text-dark text-xs mx-10'>Transaction History</h3>
        </div>
        <div className='mx-10 mt-5'>
            <h2 >Page 1 of 20</h2>
            <div ><button>Prev</button> <button>Next</button></div>
        </div>
        </div>
        <div className='flex justify-between mb-4'>
            <h2 className='mx-10'>All Activity</h2>
            <div className='mx-10'>
                <div className='text-dark font-medium text-xs'>February 10 - February 21</div>
                <button className='text-red-500 font-bold text-xs mx-9'>Clear All</button>
            </div>
        </div>
        
      <table className="border border-seperate min-w-full bg-white border-spacing-4">
      <thead>
        <tr className='border border-seperate border-spacing-2 bg-white'>
          <th className="px-4 py-2 bg-white text-center text-xs leading-4 font-medium text-black uppercase tracking-wider">
            Date
          </th>
          <th className="px-4 py-2 bg-white text-center text-xs leading-4 font-medium text-black uppercase tracking-wider">
            Platform
          </th>
          <th className="px-4 py-2 bg-white text-center text-xs leading-4 font-medium text-black uppercase tracking-wider">
            Service
          </th>
          <th className="px-4 py-2 bg-white text-center text-xs leading-4 font-medium text-black uppercase tracking-wider">
           Status
          </th>
          <th className="px-4 py-2 bg-white text-center text-xs leading-4 font-medium text-black uppercase tracking-wider">
           Price
          </th>
          <th className="px-4 py-2 bg-white text-center text-xs leading-4 font-medium text-black uppercase tracking-wider">
            
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className='border border-seperate border-spacing-4'>
          <td className="px-4 py-2 bg-white text-center text-xs leading-4 font-medium text-black  tracking-wider mb-1">
           Feb 11
          </td>
          <td className="px-6 py-3 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider">
            Remita
          </td>
          <td className="px-6 py-3 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider">
            Laundry Service
          </td>
          <td className="px-4 py-2 bg-white text-center  text-xs leading-4 font-medium text-green-500  tracking-wider">
            Approved
          </td>
          <td className='px-4 py-2 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider'>N10,000</td>
          <td><button>....</button></td>
        </tr>
        <tr className='border border-seperate border-spacing-4'>
          <td className="px-4 py-2 bg-white text-center text-xs leading-4 font-medium text-black  tracking-wider mb-1">
           Feb 11
          </td>
          <td className="px-6 py-3 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider">
           Payday
          </td>
          <td className="px-6 py-3 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider">
           Car Repair Service
          </td>
          <td className="px-4 py-2 bg-white text-center  text-xs leading-4 font-medium text-green-500  tracking-wider">
            Approved
          </td>
          <td className='px-4 py-2 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider'>N8,000</td>
          <td><button>....</button></td>
        </tr>
        <tr className='border border-seperate border-spacing-4'>
          <td className="px-4 py-2 bg-white text-center text-xs leading-4 font-medium text-black  tracking-wider mb-1">
           Feb 11
          </td>
          <td className="px-6 py-3 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider">
            Remita
          </td>
          <td className="px-6 py-3 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider">
            Laundry Service
          </td>
          <td className="px-4 py-2 bg-white text-center  text-xs leading-4 font-medium text-red-500  tracking-wider">
           Cancel
          </td>
          <td className='px-4 py-2 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider'>N10,000</td>
          <td><button>....</button></td>
        </tr>
        <tr className='border border-seperate border-spacing-4'>
          <td className="px-4 py-2 bg-white text-center text-xs leading-4 font-medium text-black  tracking-wider mb-1">
           Feb 12
          </td>
          <td className="px-6 py-3 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider">
            Payday
          </td>
          <td className="px-6 py-3 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider">
           Fast Food
          </td>
          <td className="px-4 py-2 bg-white text-center  text-xs leading-4 font-medium text-green-500  tracking-wider">
            Approved
          </td>
          <td className='px-4 py-2 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider'>N5,000</td>
          <td><button>....</button></td>
        </tr>
        <tr className='border border-seperate border-spacing-4'>
          <td className="px-4 py-2 bg-white text-center text-xs leading-4 font-medium text-black  tracking-wider mb-1">
           Feb 13
          </td>
          <td className="px-6 py-3 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider">
            Remita
          </td>
          <td className="px-6 py-3 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider">
            Home Tutors
          </td>
          <td className="px-4 py-2 bg-white text-center  text-xs leading-4 font-medium text-green-500  tracking-wider">
            Approved
          </td>
          <td className='px-4 py-2 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider'>N10,000</td>
          <td><button>....</button></td>
        </tr>
        <tr className='border border-seperate border-spacing-4'>
          <td className="px-4 py-2 bg-white text-center text-xs leading-4 font-medium text-black  tracking-wider mb-1">
           Feb 13
          </td>
          <td className="px-6 py-3 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider">
            Payday
          </td>
          <td className="px-6 py-3 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider">
            Fast Food
          </td>
          <td className="px-4 py-2 bg-white text-center  text-xs leading-4 font-medium text-green-500  tracking-wider">
            Approved
          </td>
          <td className='px-4 py-2 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider'>N10,000</td>
          <td><button>....</button></td>
        </tr>
        <tr className='border border-seperate border-spacing-4'>
          <td className="px-4 py-2 bg-white text-center text-xs leading-4 font-medium text-black  tracking-wider mb-1">
           Feb 13
          </td>
          <td className="px-6 py-3 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider">
            Remita
          </td>
          <td className="px-6 py-3 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider">
            Make Up
          </td>
          <td className="px-4 py-2 bg-white text-center  text-xs leading-4 font-medium text-green-500  tracking-wider">
            Approved
          </td>
          <td className='px-4 py-2 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider'>N10,000</td>
          <td><button>....</button></td>
        </tr>
        <tr className='border border-seperate border-spacing-4'>
          <td className="px-4 py-2 bg-white text-center text-xs leading-4 font-medium text-black  tracking-wider mb-1">
           Feb 14
          </td>
          <td className="px-6 py-3 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider">
            Payday
          </td>
          <td className="px-6 py-3 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider">
            Laundry Service
          </td>
          <td className="px-4 py-2 bg-white text-center  text-xs leading-4 font-medium text-green-500  tracking-wider">
            Approved
          </td>
          <td className='px-4 py-2 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider'>N8,000</td>
          <td><button>....</button></td>
        </tr>
        <tr className='border border-seperate border-spacing-4'>
          <td className="px-4 py-2 bg-white text-center text-xs leading-4 font-medium text-black  tracking-wider mb-1">
           Feb 14
          </td>
          <td className="px-6 py-3 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider">
            Payday
          </td>
          <td className="px-6 py-3 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider">
            Laundry Service
          </td>
          <td className="px-4 py-2 bg-white text-center  text-xs leading-4 font-medium text-red-500  tracking-wider">
            Cancel
          </td>
          <td className='px-4 py-2 bg-white text-center  text-xs leading-4 font-medium text-black  tracking-wider'>N8,000</td>
          <td><button>....</button></td>
        </tr>
        
        {/* Add table rows here */}
      </tbody>
    </table>
    </div>
    </div>
    </UserLayout>
  );
};

export default UserTransaction;