import React from 'react';


const Article = ({ imgUrl, date, text }) => (
  <div className="w-full h-full flex flex-col bg-footer-color">
    <div className="w-full h-full bg-bg-color">
      <img className=' w-full h-full' src={imgUrl} alt="blog_image" />
    </div>
    <div className="flex flex-col justify-between p-4 h-full lg:text-base text-lg leading-6">
      <div>
        <p className=' cursor-pointer font-custom text-xs font-bold leading-10 text-white'>{date}</p>
        <h3 className='cursor-pointer font-custom  font-bold leading-10 text-white lg:text-base text-lg '>{text}</h3>
      </div>
      <p className=' cursor-pointer font-custom text-xs font-bold leading-10 text-white'>Read Full Article</p>
    </div>
  </div>
);

export default Article;
