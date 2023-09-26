import React, { Fragment } from 'react'
const Footer = () => {
  return (
    <Fragment>
    <div className='flex flex-col bg-amber-600 gap-5 justify-center items-center'>
      <div className='flex flex-row gap-52 justify-center items-center'>
        <div className='text-white text-md flex flex-col gap-3'>
        <p className='mb-3 mt-3 font-bold'>Company</p>
        <p>About Us</p>
        <p>Destination</p>
        <p>Package</p>
        <p>Contact</p>
        </div>

        <div className='text-white text-md flex flex-col gap-3'>
        <p className='mb-3 font-bold'>Help</p>
        <p>Help/FAQ</p>
        <p>Cancel your order</p>
        <p>Press</p>
        </div>

        <div className='text-white text-md flex flex-col gap-3'>
        <p className='mb-3 mt-3 font-bold'>More</p>
        <p>Block</p>
        <p>Investor Relations</p>
        <p>Partnerships</p>
        <p>Jobs</p>
        </div>

        <div className='text-white text-md flex flex-col gap-3'>
        <p className='mb-3 font-bold'>Terms</p>
        <p>Privacy policy</p>
        <p>Terms of use</p>
        <p>Accessibility</p>
        </div>
    </div>
    <svg width="1311" height="1" viewBox="0 0 1311 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="1311" y2="0.5" stroke="white"/>
</svg>
<p className='text-white'>Copyright (c) 2023 ServiceXpress. All Right Reserved</p>
</div>
    </Fragment>
  )
}

export default Footer