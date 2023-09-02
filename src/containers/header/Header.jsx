import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header flex flex-row  px-24 py-16  lg:flex lg:flex-col" id="home">
    <div className=" flex-1 flex justify-center items-start flex-col mr-20 lg:mb-16 sm:flex sm:justify-between sm:items-center">
      <h1 className="font-var leading-18 tracking-tighter bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent   leading-3xl font-bold font-my-custom   w-full text-center mb-12 lg:font-base md:font-xl font-lg lg:text-4xl md:text-3xl text-2xl lg:leading-10 md:leading-9  sm:text-lg sm:leading-7 ">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
      <p className='font-sans font-normal text-base leading-7 text-custom-color sm:text-base sm:leading-6'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

      <div className=" w-full my-8 mt-8 md:my-4 md:mt-0 flex flex-row sm:flex sm:justify-between sm:items-center">
        <input className=' leading-8 bg-footer border-2 border-footer px-4 outline-none text-white rounded-l-5 sm:text-xs sm:leading-10 sm:w-2/3 ' type="email" placeholder="Your Email Address" />
        <button className='flex-0.6 w-full min-h-50 font-sans font-normal text-base leading-8 bg-red-500 border-2 border-red-500 px-4 text-white cursor-pointer outline-none rounded-tr-5 rounded-br-5 sm:w-1/3 sm:text-xs sm:leading-10' type="button">Get Started</button>
      </div>           

      <div className="gpt3__header-content__people w-full flex justify-start items-center flex-row lg:flex-col mt-8 sm:flex-col md:flex-col">
        <img className='w-[181.79px] h-[38px] sm:flex-col md:flex-col' src={people} />
        <p className='ml-4 font-sans font-medium text-xs leading-10 text-white text-center flex lg:flex-col sm:m-0 md:m-0 sm:flex-col md:flex-col'>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="flex-1 flex justify-center items-center">
      <img className='w-full h-full' src={ai} />
    </div>
  </div>
);

export default Header;
