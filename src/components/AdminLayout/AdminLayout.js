import React from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminSideNav from '../AdminSideNav/AdminSideNav';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <AdminSideNav />
      <div className="flex flex-col flex-1">
        <AdminHeader />
        <main className="bg-[#FF9B05] flex items-center justify-center h-screen w-full">
          <div className="w-[976px] items-center justify-center py-4 rounded-3xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;