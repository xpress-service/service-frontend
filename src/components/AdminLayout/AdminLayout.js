import React from "react";
import AdminHeader from "../AdminHeader/AdminHeader";
import AdminSideNav from "../AdminSideNav/AdminSideNav";

const AdminLayout = ({ children }) => {
	return (
		<div className="flex bg-[#FF9B05] py-2 px-6">
			<AdminSideNav />

			<div className="flex flex-col flex-1 h-screen px-6 ml-48">
				<AdminHeader />

				<main className="h-screen flex items-center justify-center flex-1">
					<div className="w-full max-w-[976px] px-4 md:px-8 py-4 rounded-3xl h-screen ">
						{children}
					</div>
				</main>
			</div>
		</div>
	);
};

export default AdminLayout;
