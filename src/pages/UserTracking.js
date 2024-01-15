import React from "react";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import UserLayout from "../components/UserLayout/UserLayout";

const UserTracking = ({ bookings }) => {
	const [user, setUser] = useState({});
	return (
		<UserLayout>
			<div className="my-4 mx-4">
				<div className="bg-[#F4F4F4] shadow-md rounded-2xl overflow-hidden">
					<div className="bg-white">
						<h2 className="font-bold text-small mx-10 mt-5">
							Order 1
						</h2>
						<div className="flex justify-between mb-4">
							<div>
								<h3 className="font-medium text-dark text-xs mx-10">
									Vendor: Twins Faja Food
								</h3>
								<h3 className="font-medium text-dark text-xs mx-10">
									Request: Fast Food
								</h3>
							</div>
							<div className="mx-10">
								<h2 className="font-medium text-xs text-dark">
									Lagos, Nigeria
								</h2>
								<div className="font-medium text-xs text-dark">
									Tracking ID: 48746AD
								</div>
							</div>
						</div>
						<div className="flex justify-between">
							<h2 className="font-medium text-xs text-dark mx-10">
								In Preparation
							</h2>
							<div className="font-medium text-xs text-dark">
								In Progress
							</div>
							<h2 className="font-medium text-xs text-dark mx-10">
								Completed
							</h2>
						</div>
						<div className="flex justify-between px-10 py-2 mx-10 bg-yellow-400 mt-4 mb-4">
							<h2 className="text-small">
								Do you have any complain?
							</h2>
							<div>
								<button className="border  mr-2 px-2 text-xs text-dark">
									Yes
								</button>
								<button className="border  px-2  text-xs">
									No
								</button>
							</div>
						</div>
					</div>

					<div className="bg-white mb-5">
						<h2 className="font-bold text-small mx-10 mt-5">
							Order 1
						</h2>
						<div className="flex justify-between mb-4">
							<div>
								<h3 className="font-medium text-dark text-xs mx-10">
									Vendor: Twins Faja Food
								</h3>
								<h3 className="font-medium text-dark text-xs mx-10">
									Request: Fast Food
								</h3>
							</div>
							<div className="mx-10">
								<h2 className="font-medium text-xs text-dark">
									Lagos, Nigeria
								</h2>
								<div className="font-medium text-xs text-dark">
									Tracking ID: 48746AD
								</div>
							</div>
						</div>
						<div className="flex justify-between">
							<h2 className="font-medium text-xs text-dark mx-10">
								In Preparation
							</h2>
							<div className="font-medium text-xs text-dark">
								In Progress
							</div>
							<h2 className="font-medium text-xs text-dark mx-10">
								Completed
							</h2>
						</div>
						<div className="flex justify-between px-10 py-2 mx-10 bg-yellow-400 mt-4 mb-4">
							<h2 className="text-small">
								Do you have any complain?
							</h2>
							<div>
								<button className="border mr-2 px-2 text-xs">
									Yes
								</button>
								<button className="border px-2  text-xs">
									No
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</UserLayout>
	);
};

export default UserTracking;
