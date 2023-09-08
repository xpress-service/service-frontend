import React from 'react';
import bikeman from '../../icons/bikeman.svg';

export const OnDemand = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row bg-amber-600 justify-center items-center h-[38rem] md:h-auto'>
      <div className='flex flex-col md:w-[592px] px-1 md:px-1 mt-8 md:mt-0'>
        <div className="font-bold word-break whitespace-pre-line text-4xl md:text-7xl mb-4 md:mb-8">
          grow your business now with our on-demand platform
        </div>
        <div className="font-bold word-break text-3xl md:text-5xl">
          Delivery | Book  Enjoy service near you.
        </div>
      </div>

      <div className='w-[300px] md:w-[592px] h-[300px] md:h-[548px]'>
        <img src={bikeman} alt='delivery' className='w-full h-full object-cover' />
      </div>
    </div>
  );
};

export default OnDemand;