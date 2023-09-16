import React from 'react'
import editicon from '../../icons/editicon.svg'
import deleteicon from '../../icons/deleteicon.svg'


const Location = () => {
  return (
    <div className='flex flex-col mt-5 bg-white w-full py-2 px-2 bg-slate-100'>
      <div className='flex flex-row justify-between px-8'>
<p className='font-bold text-md'>Recognize Location</p>
<img src={editicon} alt='' width={20} className='mr-12'/>
</div>
<div className='flex flex-row-2 mt-3 px-8'>
    <p className='w-[10%]'>City</p>
    <div className='w-[10%]'><img src={deleteicon} alt='' width={20}/></div>
    </div>
    <div className='flex justify-end mt-3 mr-20'>
    <button className='bg-amber-600 rounded-3xl text-white px-2 py-1'>View More</button>
    </div>
    </div>
  )
}

export default Location