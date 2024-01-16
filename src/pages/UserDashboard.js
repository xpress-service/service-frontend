import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import UserLayout from "../components/UserLayout/UserLayout";

const PendingBookingsTable = ({ bookings }) => {
	const [user, setUser] = useState({});
	return (
		<UserLayout>
			<div className="my-4 mx-4">
				<div className="bg-[#F4F4F4] shadow-md rounded-2xl overflow-hidden">
					<h2 className="font-bold text-xl mx-4 my-2">Orders</h2>
					<table className="border border-seperate min-w-full bg-white border-spacing-4">
						<thead>
							<tr className="border border-seperate border-spacing-2 bg-white">
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
							<tr className="border border-seperate border-spacing-4">
								<td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider mb-1">
									Order 1<td>Task: Laundry Service</td>
								</td>
								<td className="px-6 py-3 bg-white text-left  text-xs leading-4 font-medium text-black  tracking-wider">
									75%
									<div className="bg-[#FFEBCC] h-2 rounded-full w-36">
										<div class="bg-[#FF9B05] h-full w-1/2 rounded-full"></div>
									</div>
									<td>
										<span></span>
									</td>
								</td>
								<td className="px-4 py-2 bg-white text-left  text-xs leading-4 font-medium text-black  tracking-wider">
									<button className="text-white bg-[#FF9B05] rounded-lg px-4 py-2">
										View
									</button>
								</td>
							</tr>
							<tr className="border border-seperate border-spacing-4">
								<td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider mb-1">
									Order 2<td>Task: Car Repair</td>
								</td>
								<td className="px-6 py-3 bg-white text-left  text-xs leading-4 font-medium text-black  tracking-wider">
									60%
									<div className="bg-[#FFEBCC] h-2 rounded-full w-36">
										<div class="bg-[#FF9B05] h-full w-1/2 rounded-full"></div>
									</div>
									<td>
										<span></span>
									</td>
								</td>
								<td className="px-4 py-2 bg-white text-left  text-xs leading-4 font-medium text-black  tracking-wider">
									<button className="text-white bg-[#FF9B05]  rounded-lg px-4 py-2">
										View
									</button>
								</td>
							</tr>

							{/* Add table rows here */}
						</tbody>
					</table>
				</div>
			</div>

			<div className="my-4 mx-4">
				<div className="bg-[#F4F4F4] shadow-md rounded-2xl overflow-hidden">
					<h2 className="font-bold text-xl mx-4 my-2">
						Order Details
					</h2>
					<table className="border border-seperate min-w-full bg-white border-spacing-4">
						<thead>
							<tr className="border border-seperate border-spacing-2 bg-white">
								<th className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
									Id
								</th>
								<th className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
									Name
								</th>
								<th className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
									Status
								</th>
								<th className="px-4 py-2 bg-gray-50 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
									Service
								</th>
								<th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
									Price
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="border border-seperate border-spacing-4">
								<td className="px-4 py-2 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
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
								<td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider mb-1">
									Joseph John
									<td className="text-gray-400">
										Ojo, Lagos
									</td>
								</td>
								<td className="bg-white px-4 py-2  text-left text-xs leading-4 font-medium  uppercase tracking-wider">
									<span className="rounded-xl bg-[#CDFFD2] text-[#6C7468] px-4 py-2">
										Completed
									</span>
								</td>
								<td className="px-6 py-3 bg-white text-left  text-xs leading-4 font-medium text-black  tracking-wider">
									Laundry Service
								</td>
								<td className="px-4 py-2 bg-white text-left  text-xs leading-4 font-medium text-black  tracking-wider">
									N7,800
								</td>
								<td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
									...
								</td>
							</tr>
							<tr className="border border-seperate border-spacing-4">
								<td className="px-4 py-2 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
									<span className="w-6 h-6 flex justify-left rounded-full bg-gray-300 relative">
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
								<td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
									Muneerah Jamiu
									<td className="text-gray-400">
										Island, Lagos
									</td>
								</td>
								<td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium uppercase tracking-wider">
									<span className="rounded-xl bg-[#F8DEB8] text-[#6A4A1B] px-4 py-2">
										Pending
									</span>
								</td>
								<td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
									Laundry Service
								</td>
								<td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
									N5,800
								</td>
								<td className="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
									...
								</td>
							</tr>
							<tr className="border border-seperate border-spacing-4">
								<td className="px-4 py-2 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
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
								<td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
									Quadri Olushola
									<td className="text-gray-400">
										Ibeju, Lagos
									</td>
								</td>
								<td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium  uppercase tracking-wider">
									<span className="rounded-xl bg-[#CDFFD2] text-[#6C7468] px-4 py-2">
										Completed
									</span>
								</td>
								<td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
									Fast Food
								</td>
								<td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
									N9,500
								</td>
								<td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
									...
								</td>
							</tr>
							<tr className="border border-seperate border-spacing-4">
								<td className="px-4 py-2 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
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
								<td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
									Joseph Anita
									<td className="text-gray-400">
										Epe, Lagos
									</td>
								</td>
								<td className=" px-6 py-3 bg-white text-left text-xs leading-4 font-medium  uppercase tracking-wider">
									<span className="rounded-xl bg-[#FBDBD1] text-[#664B42] text-center px-4 py-2">
										Cancel
									</span>
								</td>
								<td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
									Make Up
								</td>
								<td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
									N8,000
								</td>
								<td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
									...
								</td>
							</tr>
							<tr className="border border-seperate border-spacing-4">
								<td className="px-4 py-2 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
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
								<td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
									Maryam Qudus
									<td className="text-gray-400">
										Lekki, Lagos
									</td>
								</td>
								<td className=" px-4 py-2 bg-white text-left text-xs leading-4 font-medium  uppercase tracking-wider">
									<span className="rounded-xl bg-[#CDFFD2] text-[#6C7468] px-4 py-2">
										Completed
									</span>
								</td>
								<td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
									Home Tutors
								</td>
								<td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
									N7,500
								</td>
								<td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
									...
								</td>
							</tr>
							<tr className="border border-seperate border-spacing-4">
								<td className="px-4 py-2 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
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
								<td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
									Emmanuel Joe
									<td className="text-gray-400">
										Island, Lagos
									</td>
								</td>
								<td className=" px-4 py-2 bg-white text-left text-xs leading-4 font-medium  uppercase tracking-wider">
									<span className="rounded-xl bg-[#CDFFD2] text-[#6C7468] px-4 py-2">
										Completed
									</span>
								</td>
								<td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
									Fast Food
								</td>
								<td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
									N4,700
								</td>
								<td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
									...
								</td>
							</tr>
							<tr className="border border-seperate border-spacing-4">
								<td className="px-4 py-2 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
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
								<td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
									Richard Isreal
									<td className="text-gray-400">
										Ikeja, Lagos
									</td>
								</td>
								<td className=" px-4 py-2 bg-white text-left text-xs leading-4 font-medium  uppercase tracking-wider">
									<span className="rounded-xl bg-[#F8DEB8] text-[#6A4A1B] px-4 py-2">
										Pending
									</span>
								</td>
								<td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
									Veterinary
								</td>
								<td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
									N9,900
								</td>
								<td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider">
									...
								</td>
							</tr>
							{/* Add table rows here */}
						</tbody>
					</table>
				</div>
			</div>

			{/* // </div>
    // </div>  */}
		</UserLayout>
	);
};

export default PendingBookingsTable;
