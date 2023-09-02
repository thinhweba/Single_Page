import React from 'react';
import Article from '../../component/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
const Blog = () => (
  <div className=" flex flex-col py-16 px-24 md:p-8 sm:p-8 " id="blog">
    <div className="md:text-2xl lg:text-3xl w-full text-left mb-20  leading-9 md:leading-2 sm:leading-9 lg:leading-11 text-4xl leading-6xl ">
      <h1 className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent  text-6xl leading-3xl font-bold font-my-custom  md:text-xl md:leading-8 lg:text-6xl leading-11  lg:leading-11">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className=" flex  lg:flex-row flex-col-reverse ">
      <div className="flex-shrink-0 mr-8  lg:w-1/2 lg:h-64 lg:mr-8 ">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="flex-1 gap-8 grid grid-cols-1  md:grid-cols-2 ">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);

export default Blog;
