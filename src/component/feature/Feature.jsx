import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => (
  
  <div className="  w-full flex justify-around lg:text-18 md:text-14 sm:text-14 text-14 lg:leading-24 md:leading-22 sm:leading-22 leading-20 lg:mb-0 md:mb-2 sm:mb-2 mb-2 items-start flex-row m-4">
    <div className="gpt3__features-container__feature-title">
      <h1 className='font-manrope font-semibold text-18 leading-24 tracking-wide text-white lg:p-6'>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p className="font-manrope font-medium text-14 leading-24 text-color-text">{text}</p>
    </div>
  </div>

 
  
  
);

export default Feature;
