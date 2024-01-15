import React from 'react'
import UserLayout from '../components/UserLayout/UserLayout'
import { FaUser } from "react-icons/fa"

const UserProfile = () => {
  return (
   <UserLayout>
    {/* <div className='flex flex-shrink-0 w-[1105px] h-[360px] bg-[#F4F4F4] border rounded-3xl pt-12 px-4'> */}
    <div className='flex  flex-shrink-0 w-full md:container md:mx-auto bg-[#F4F4F4] border rounded-3xl py-8 mt-5 gap-5 px-4'>
      <div className='flex flex-col gap-3 w-[250px]'>
      <FaUser size={150} 
        />
        <p className='flex flex-shrink-0 w-[189px] h-[26px] text-[#262626] text-xl font-bold'>Gabriel Tosin</p>
        <p className='flex flex-shrink-0 w-[153px] h-[32px] text-[#FF9B05] text-xl'>SX8674584</p>
        <p  className='flex flex-shrink-0 w-[189px] h-[26px] text-[#262626] text-xl'>Joined: 25/10/2023</p>
      </div>

      <div>
        <div className='flex flex-row justify-between w-[600px]'>
        <p className='flex flex-shrink-0 w-[189px] h-[26px] text-[#262626] text-xl font-bold'>Basic info</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 38 38" fill="none">
  <path d="M33.2295 4.77002C32.7218 4.26226 32.119 3.85949 31.4556 3.58469C30.7921 3.30989 30.0811 3.16846 29.363 3.16846C28.6449 3.16846 27.9339 3.30989 27.2705 3.58469C26.6071 3.85949 26.0043 4.26226 25.4965 4.77002L6.36352 23.9062C5.7604 24.5092 5.33056 25.2634 5.11902 26.0896L3.19765 33.5986C3.15525 33.7649 3.15686 33.9394 3.2023 34.1049C3.24774 34.2705 3.33546 34.4213 3.45683 34.5427C3.57821 34.6641 3.72908 34.7518 3.89461 34.7972C4.06014 34.8427 4.23464 34.8443 4.40098 34.8019L11.9115 32.8829C12.7383 32.6717 13.4931 32.2418 14.0965 31.6384L33.2295 12.5022C34.2547 11.4768 34.8307 10.0861 34.8307 8.63612C34.8307 7.1861 34.2547 5.79545 33.2295 4.77002ZM26.8962 6.16969C27.5504 5.51534 28.4378 5.14768 29.3631 5.14761C30.2885 5.14754 31.1759 5.51505 31.8303 6.16929C32.4846 6.82354 32.8523 7.71092 32.8523 8.63624C32.8524 9.56156 32.4849 10.449 31.8306 11.1034L30.0834 12.8506L25.1498 7.9161L26.8962 6.16969ZM23.7501 9.31577L28.6838 14.2502L12.6969 30.2387C12.3446 30.591 11.9041 30.842 11.4215 30.9655L5.52911 32.4712L7.03644 26.5804C7.15994 26.0975 7.4109 25.6574 7.7624 25.3059L23.7501 9.31498V9.31577Z" fill="#111111"/>
</svg>
        </div>
        <div className='flex flex-row w-[800px] justify-between'>
        <div className='flex flex-col gap-5'>
        <p className='flex flex-shrink-0 w-[90px] h-[26px] text-[#262626] font-normal mt-2'>Email:</p>
<p className='flex flex-shrink-0 w-[233px] h-[26px] text-[#262626] font-medium'>tosin@gmail.com</p>
<p className='flex flex-shrink-0 w-[90px] h-[26px] text-[#129B35] font-normal'>verified</p>
<p className='flex flex-shrink-0 w-[90px] h-[26px] text-[#262626] font-normal mt-5' >Birthday</p>
<p className='flex flex-shrink-0 w-[90px] h-[26px] text-[#262626] font-normal'>21/01/1999</p>
      </div>
      <div className='flex flex-col gap-5'>
      <p className='flex flex-shrink-0 w-[90px] h-[26px] text-[#262626] font-normal mt-2'>Password</p>
      <p className='flex flex-shrink-0 w-[90px] h-[26px] text-[#262626] font-normal'>xxxxxxxxx</p>
      <p className='flex flex-shrink-0 w-[233px] h-[26px] text-[#35539F] font-normal'>Change Password</p>
<p className='flex flex-shrink-0 w-[90px] h-[26px] text-[#262626] font-normal mt-5'>Location</p>
<p className='flex flex-shrink-0 w-[233px] h-[26px] text-[#262626] font-normal'>lagos, Nigeria <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M12.5 14.0625C11.7274 14.0625 10.9722 13.8334 10.3298 13.4042C9.68743 12.975 9.18675 12.3649 8.8911 11.6511C8.59544 10.9373 8.51809 10.1519 8.66881 9.39418C8.81953 8.63644 9.19157 7.94042 9.73787 7.39412C10.2842 6.84782 10.9802 6.47578 11.7379 6.32506C12.4957 6.17434 13.2811 6.25169 13.9949 6.54735C14.7086 6.843 15.3187 7.34368 15.7479 7.98606C16.1772 8.62844 16.4063 9.38367 16.4063 10.1563C16.405 11.1919 15.9931 12.1847 15.2608 12.917C14.5285 13.6493 13.5356 14.0613 12.5 14.0625ZM12.5 7.8125C12.0365 7.8125 11.5833 7.94996 11.1979 8.2075C10.8125 8.46503 10.5121 8.83107 10.3347 9.25934C10.1573 9.6876 10.1109 10.1589 10.2013 10.6135C10.2917 11.0681 10.5149 11.4858 10.8427 11.8135C11.1705 12.1413 11.5881 12.3645 12.0428 12.455C12.4974 12.5454 12.9687 12.499 13.3969 12.3216C13.8252 12.1442 14.1912 11.8438 14.4488 11.4584C14.7063 11.0729 14.8438 10.6198 14.8438 10.1563C14.8431 9.53484 14.596 8.93906 14.1566 8.49966C13.7172 8.06025 13.1214 7.81312 12.5 7.8125Z" fill="#111111"/>
  <path d="M12.5 23.4375L5.90938 15.6648C5.81781 15.5481 5.72718 15.4307 5.63751 15.3125C4.51171 13.8295 3.90353 12.0181 3.90626 10.1562C3.90626 7.87705 4.81167 5.69119 6.42331 4.07955C8.03495 2.46791 10.2208 1.5625 12.5 1.5625C14.7792 1.5625 16.9651 2.46791 18.5767 4.07955C20.1883 5.69119 21.0938 7.87705 21.0938 10.1562C21.0965 12.0173 20.4886 13.8278 19.3633 15.3102L19.3625 15.3125C19.3625 15.3125 19.1281 15.6203 19.093 15.6617L12.5 23.4375ZM6.88438 14.3711C6.88595 14.3711 7.0672 14.6117 7.1086 14.6633L12.5 21.0219L17.8984 14.6547C17.9328 14.6117 18.1156 14.3695 18.1164 14.3688C19.0361 13.1571 19.5331 11.6774 19.5313 10.1562C19.5313 8.29145 18.7905 6.50302 17.4719 5.18441C16.1532 3.86579 14.3648 3.125 12.5 3.125C10.6352 3.125 8.84678 3.86579 7.52816 5.18441C6.20955 6.50302 5.46876 8.29145 5.46876 10.1562C5.46712 11.6783 5.9639 13.1589 6.88438 14.3711Z" fill="#111111"/>
</svg></span> </p>
      </div>
      <div className='flex flex-col gap-5 mr-32'>
      <p className='flex flex-shrink-0 w-[130px] h-[26px] text-[#262626] font-normal'>mobibe number</p>
      <p className='flex flex-shrink-0 w-[90px] h-[26px] text-[#262626] font-normal'>xxxxxxxxxxxx</p>

<p className='flex flex-shrink-0 w-[90px] h-[26px] text-[#262626] font-normal mt-12' >Gender</p>
<p className='flex flex-shrink-0 w-[90px] h-[26px] text-[#262626] font-normal'>Male</p>
      </div>
        </div>
      </div>
    </div>
    <div className='flex flex-col flex-shrink-0 w-full md:container md:mx-auto bg-[#F4F4F4] border rounded-3xl py-8 mt-5 gap-5'>
    <table className="border border-seperate min-w-full bg-white border-spacing-4 h-[112px]">
    <tbody>
      <tr className='flex flex-shrink-0 font-bold text-md ml-11'>Your Order Summary</tr>
        <tr className='border rounded-3xl mt-1 w-[1105px] mb-4 bg-[#F4F4F4]'>
          <th 
          className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
            <p > 
              <span className='text-md font-bold bg-[#CDFFD2] w-[120px] h-[36px] items-center justify-center flex-shrink-0 border rounded-md p-1 ml-7'>
                Completed
              </span> 
              <span className='text-normal font-bold ml-5'>
                112
                </span>
                </p>
           </th>
          <th 
          className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
            <p > 
              <span className='text-md font-bold bg-[#F8DEB8] w-[120px] h-[36px] items-center justify-center flex-shrink-0 border rounded-md p-1'>
                Pending
              </span> 
              <span className='text-normal font-bold ml-5'>
                15
                </span>
                </p>
           </th>
           <th 
          className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black uppercase tracking-wider ">
            <p className='mr-[-3.5rem]'> 
              <span className='text-md font-bold bg-[#F8DEB8] w-[120px] h-[36px] items-center justify-center flex-shrink-0 border rounded-md p-1'>
                Cancel
              </span> 
              <span className='text-normal font-bold ml-5'>
                45
                </span>
                </p>
           </th>
        </tr>
       </tbody>
    </table>
   
    <table className="border border-seperate min-w-full bg-white border-spacing-4 h-[371px]">
       <tbody>
        <tr>
          <td className='flex flex-shrink-0 font-bold text-md ml-11'>
            Your order history
          </td>
        </tr>
         <tr className='border border-seperate border-spacing-4'>
           <td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider mb-1">
            <span className='flex flex-row gap-5'>
            <FaUser size={24} 
        /> Order 1
            </span>
           <td className='flex ml-11 mt-[-5px]'>Task: Laundry Service</td>
          </td>
          <th 
          className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
            <p > 
              <span className='text-md font-bold bg-[#CDFFD2] w-[120px] h-[36px] items-center justify-center flex-shrink-0 border rounded-md p-1'>
                Completed
              </span> 
                </p>
           </th>
          <td className="px-4 py-2 bg-white text-left  text-xs leading-4 font-medium text-black  tracking-wider">
          Car Repair
          </td>
          <td className="px-4 py-2 bg-white text-left  text-xs leading-4 font-medium text-black  tracking-wider">
       #7,800
          </td>
          <td className="px-4 py-2 bg-white text-left  text-xs leading-4 font-medium text-black  tracking-wider">
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
  <path d="M25.5859 19.0676C25.2486 19.0677 24.9146 19.0014 24.603 18.8724C24.2914 18.7435 24.0082 18.5544 23.7696 18.316C23.5311 18.0776 23.3418 17.7945 23.2127 17.483C23.0835 17.1714 23.017 16.8375 23.0168 16.5002C23.0167 16.1629 23.0831 15.829 23.212 15.5173C23.341 15.2057 23.5301 14.9225 23.7685 14.684C24.0069 14.4454 24.2899 14.2561 24.6015 14.127C24.913 13.9978 25.247 13.9313 25.5842 13.9312C26.2654 13.9309 26.9187 14.2013 27.4005 14.6828C27.8823 15.1643 28.1531 15.8174 28.1533 16.4986C28.1535 17.1797 27.8831 17.833 27.4017 18.3148C26.9202 18.7966 26.267 19.0674 25.5859 19.0676Z" fill="#777777"/>
  <path d="M16.7715 19.0674C18.1894 19.0674 19.3389 17.918 19.3389 16.5C19.3389 15.0821 18.1894 13.9326 16.7715 13.9326C15.3536 13.9326 14.2041 15.0821 14.2041 16.5C14.2041 17.918 15.3536 19.0674 16.7715 19.0674Z" fill="#777777"/>
  <path d="M7.95558 19.0674C9.37352 19.0674 10.523 17.918 10.523 16.5C10.523 15.0821 9.37352 13.9326 7.95558 13.9326C6.53765 13.9326 5.38818 15.0821 5.38818 16.5C5.38818 17.918 6.53765 19.0674 7.95558 19.0674Z" fill="#777777"/>
</svg>
          </td>
         </tr>
         
         <tr className='border border-seperate border-spacing-4'>
           <td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider mb-1">
            <span className='flex flex-row gap-5'>
            <FaUser size={24} 
        /> Order 2
            </span>
           <td className='flex ml-11 mt-[-5px]'>Task: Laundry Service</td>
          </td>
          <th 
          className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
            <p > 
              <span className='text-md font-bold bg-[#F8DEB8] w-[120px] h-[36px] items-center justify-center flex-shrink-0 border rounded-md p-1'>
                Pending
              </span> 
                </p>
           </th>
          <td className="px-4 py-2 bg-white text-left  text-xs leading-4 font-medium text-black  tracking-wider">
          Laundry services
          </td>
          <td className="px-4 py-2 bg-white text-left  text-xs leading-4 font-medium text-black  tracking-wider">
       #5,800
          </td>
          <td className="px-4 py-2 bg-white text-left  text-xs leading-4 font-medium text-black  tracking-wider">
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
  <path d="M25.5859 19.0676C25.2486 19.0677 24.9146 19.0014 24.603 18.8724C24.2914 18.7435 24.0082 18.5544 23.7696 18.316C23.5311 18.0776 23.3418 17.7945 23.2127 17.483C23.0835 17.1714 23.017 16.8375 23.0168 16.5002C23.0167 16.1629 23.0831 15.829 23.212 15.5173C23.341 15.2057 23.5301 14.9225 23.7685 14.684C24.0069 14.4454 24.2899 14.2561 24.6015 14.127C24.913 13.9978 25.247 13.9313 25.5842 13.9312C26.2654 13.9309 26.9187 14.2013 27.4005 14.6828C27.8823 15.1643 28.1531 15.8174 28.1533 16.4986C28.1535 17.1797 27.8831 17.833 27.4017 18.3148C26.9202 18.7966 26.267 19.0674 25.5859 19.0676Z" fill="#777777"/>
  <path d="M16.7715 19.0674C18.1894 19.0674 19.3389 17.918 19.3389 16.5C19.3389 15.0821 18.1894 13.9326 16.7715 13.9326C15.3536 13.9326 14.2041 15.0821 14.2041 16.5C14.2041 17.918 15.3536 19.0674 16.7715 19.0674Z" fill="#777777"/>
  <path d="M7.95558 19.0674C9.37352 19.0674 10.523 17.918 10.523 16.5C10.523 15.0821 9.37352 13.9326 7.95558 13.9326C6.53765 13.9326 5.38818 15.0821 5.38818 16.5C5.38818 17.918 6.53765 19.0674 7.95558 19.0674Z" fill="#777777"/>
</svg>
          </td>
         </tr>
         <tr className='border border-seperate border-spacing-4'>
           <td className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black  tracking-wider mb-1">
            <span className='flex flex-row gap-5'>
            <FaUser size={24} 
        /> Order 3
            </span>
           <td className='flex ml-11 mt-[-5px]'>Task: Laundry Service</td>
          </td>
          <th 
          className="px-4 py-2 bg-white text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
            <p > 
              <span className='text-md font-bold bg-[#CDFFD2] w-[120px] h-[36px] items-center justify-center flex-shrink-0 border rounded-md p-1'>
                Completed
              </span> 
                </p>
           </th>
          <td className="px-4 py-2 bg-white text-left  text-xs leading-4 font-medium text-black  tracking-wider">
          Fast food
          </td>
          <td className="px-4 py-2 bg-white text-left  text-xs leading-4 font-medium text-black  tracking-wider">
       #9,500
          </td>
          <td className="px-4 py-2 bg-white text-left  text-xs leading-4 font-medium text-black  tracking-wider">
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
  <path d="M25.5859 19.0676C25.2486 19.0677 24.9146 19.0014 24.603 18.8724C24.2914 18.7435 24.0082 18.5544 23.7696 18.316C23.5311 18.0776 23.3418 17.7945 23.2127 17.483C23.0835 17.1714 23.017 16.8375 23.0168 16.5002C23.0167 16.1629 23.0831 15.829 23.212 15.5173C23.341 15.2057 23.5301 14.9225 23.7685 14.684C24.0069 14.4454 24.2899 14.2561 24.6015 14.127C24.913 13.9978 25.247 13.9313 25.5842 13.9312C26.2654 13.9309 26.9187 14.2013 27.4005 14.6828C27.8823 15.1643 28.1531 15.8174 28.1533 16.4986C28.1535 17.1797 27.8831 17.833 27.4017 18.3148C26.9202 18.7966 26.267 19.0674 25.5859 19.0676Z" fill="#777777"/>
  <path d="M16.7715 19.0674C18.1894 19.0674 19.3389 17.918 19.3389 16.5C19.3389 15.0821 18.1894 13.9326 16.7715 13.9326C15.3536 13.9326 14.2041 15.0821 14.2041 16.5C14.2041 17.918 15.3536 19.0674 16.7715 19.0674Z" fill="#777777"/>
  <path d="M7.95558 19.0674C9.37352 19.0674 10.523 17.918 10.523 16.5C10.523 15.0821 9.37352 13.9326 7.95558 13.9326C6.53765 13.9326 5.38818 15.0821 5.38818 16.5C5.38818 17.918 6.53765 19.0674 7.95558 19.0674Z" fill="#777777"/>
</svg>
          </td>
         </tr>
         {/* Add table rows here */}
       </tbody>
    </table>
    <div className='flex items-center justify-end mr-3'>
      <button className='bg-[#FF9B05] border rounded-3xl w-[135px] h-[44px] text-white'>View more</button>
    </div>
    </div>
    
   </UserLayout>
  )
}

export default UserProfile