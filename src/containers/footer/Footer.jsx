import React from 'react';
import gpt3Logo from '../../logo.svg';


const Footer = () => (
  <div className="bg-footer flex flex-col justify-center items-center bg-var(--color-footer) py-16 px-24">
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent   leading-3xl font-bold font-my-custom   w-full text-center mb-12 lg:font-base md:font-xl font-lg lg:text-4xl md:text-3xl text-2xl lg:leading-10 md:leading-9  sm:text-lg sm:leading-7">
      <h1 className=" bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400  font-bold text-6xl leading-14 bg-gradient-text text-transparent bg-clip-text lg:text-4xl md:text-3xl  lg:leading-10 md:leading-9  leading-none">Do you want to step in to the future before others</h1>
    </div>

    <div className=" flex justify-center items-center p-4 border border-white text-center mb-40 cursor-pointer lg:my-4 md:my-4 sm:my-6">
      <p className='text-base font-sans leading-5 text-white tracking-wide lg:my-4 md:my-4 sm:my-6'>Request Early Access</p>
    </div>

    <div className=" flex justify-between items-start flex-row flex-wrap w-full text-left  ">
      <div className=" w-64 mx-4 flex flex-col lg:my-4 md:my-4 sm:my-6">
        <img className='w-28 h-7 mb-4' src={gpt3Logo} alt="gpt3_logo" />
        <p className='font-sans text-xs leading-4 text-white'>Front end developer <br /> Tp.HCM</p>
      </div>
      <div className=" flex justify-start flex-col lg:my-4 md:my-4 sm:my-6 w-64 mx-4">
        <h4 className='text-sm leading-5 font-sans text-white mb-3'>Links</h4>
        <p className='text-xs leading-4 font-sans text-white my-2 cursor-pointer'><a href='https://www.facebook.com/phan.giathinh.96/'>Facebook</a></p>
        <p className='text-xs leading-4 font-sans text-white my-2 cursor-pointer'><a href='https://github.com/thinhweba'>Github</a></p>
        <p className='text-xs leading-4 font-sans text-white my-2 cursor-pointer'><a href='www.linkedin.com/in/phangiathinh'>Linkedin</a></p>

      </div>
      <div className=" flex justify-start flex-col lg:my-4 md:my-4 sm:my-6 w-64 mx-4">
        <h4 className='text-sm leading-5 font-sans text-white mb-3'>Company</h4>
        <p className='text-xs leading-4 font-sans text-white my-2 cursor-pointer'>Terms & Conditions </p>
        <p className='text-xs leading-4 font-sans text-white my-2 cursor-pointer'>Privacy Policy</p>
        <p className='text-xs leading-4 font-sans text-white my-2 cursor-pointer'>Contact</p>
      </div>
      <div className=" flex justify-start flex-col lg:my-4 md:my-4 sm:my-6 w-64 mx-4">
        <h4 className='text-sm leading-5 font-sans text-white mb-3'>Get in touch</h4>
        <p className='text-xs leading-4 font-sans text-white my-2 cursor-pointer'>Bình Hưng Hòa A ,Bình Tân ,TP.HCM</p>
        <p className='text-xs leading-4 font-sans text-white my-2 cursor-pointer'>0899895251</p>
        <p className='text-xs leading-4 font-sans text-white my-2 cursor-pointer'>gt05012003@gmail.com</p>
      </div>
    </div>

    <div className=" mt-8 text-center w-full">
      <p className='text-xs font-sans leading-4 text-white'>@2023 GPT-3. Phan Gia Thịnh.</p>
    </div>
  </div>
);

export default Footer;
