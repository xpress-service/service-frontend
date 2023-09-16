import React from 'react'
import deleteicon from '../../icons/deleteicon.svg'
import optionicon from '../../icons/optionicon.svg'
import editicon from '../../icons/editicon.svg'
import user from '../../icons/images/user.svg'
const Bookings = () => {
  return (
    <div>
      <div className='flex flex-row justify-between bg-white mt-5 px-8'>
<p className='font-bold text-md'>Users/Bookings</p>
<img src={editicon} alt='' width={20} className='mr-12'/>
</div>
        <table className="table table-hover mt-5 text-center bg-white w-full">
        <tbody className='px-8'>
        <tr>
        <td ><img src={user} alt='' /></td>
            <td>name</td>
            <td>service</td>
            <td>gender</td>
            <td><img src={deleteicon} alt='' width={20}/></td>
            <td><img src={optionicon} alt=''width={20}/></td>
        </tr>
        </tbody>
    </table>
    <div className='flex justify-end mt-3 mr-20'>
    <button className='bg-amber-600 rounded-3xl text-white px-2 py-1'>View More</button>
    </div>
    </div>
  )
}

export default Bookings