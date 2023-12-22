// src/components/BookingsTable.js
import React from 'react';
import AdminSideNav from '../components/AdminSideNav/AdminSideNav';
import AdminHeader from '../components/AdminHeader/AdminHeader';


const AdminProfile = ({ bookings }) => {
  return (
    <div className='flex h-screen bg-[#FF9B05]'>
      <div className='mx-5 my-5'>
      <AdminSideNav/>
      </div>
      <div className='flex-1 flex flex-col mt-5'>
        <div className='ml-5 mr-5'>
          <AdminHeader/>
      </div>
      
    
    </div>
    </div> 
  );
};

export default AdminProfile;