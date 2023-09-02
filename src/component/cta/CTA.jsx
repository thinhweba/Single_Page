import React from 'react';
const CTA = () => (
  <div className="flex justify-between items-center flex-row p-8 m-16 rounded-lg bg-gradient-bar md:flex-row md:items-center md:justify-between ">
    <div className="flex flex-col text-left text-white">
      <p className='font-custom text-xs leading-10 font-medium'>Request Early Access to Get Started</p>
      <h3 className='font-custom text-2xl leading-10 font-extrabold'>Register Today & start exploring the endless possibilities.</h3>
    </div>
    <div className="flex justify-center items-center ml-8 md:ml-8 mt-2 md:mt-0">
      <button className=' md:ml-8 mt-2 md:mt-0 bg-black text-white font-bold text-base leading-6 py-2 px-4 rounded-full border-none outline-none cursor-pointer min-w-min' type="button">Get Started</button>
    </div>
  </div>
);

export default CTA;
