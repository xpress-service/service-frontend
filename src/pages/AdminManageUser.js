import React from "react";

import Bookings from "../components/ManageUser/Bookings";
import Vendors from "../components/ManageUser/Vendors";
import Location from "../components/ManageUser/Location";
import AdminLayout from "../components/AdminLayout/AdminLayout";

const AdminManageUser = () => {
  return (
    <AdminLayout>    
      
      <Location />
      <Vendors />
      <Bookings />
      
    </AdminLayout>
  );
};

export default AdminManageUser;
