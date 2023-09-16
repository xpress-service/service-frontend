import React from "react";

import Bookings from "../components/ManageUser/Bookings";
import Vendors from "../components/ManageUser/Vendors";
import Location from "../components/ManageUser/Location";

const AdminManageUser = () => {
  return (
    <div className="flex flex-col bg-amber-600 min-h-screen items-center justify-center">
      <div className="w-[1105px] h-[849px] bg-slate-100 items-center justify-center py-4 rounded-3xl">
      <Location />

      <Vendors />

      <Bookings />
      </div>
    </div>
  );
};

export default AdminManageUser;
