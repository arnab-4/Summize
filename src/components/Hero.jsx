import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
      <div className='flex items-center'>
  <img src={logo} alt='sumz_logo' className='w-13 h-12 object-contain' />
  <span className='ml-2 text-lg font-semibold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent tracking-wide'>
    Summize
  </span>
</div>




        <button
  type='button'
  onClick={() =>
    window.open("https://github.com/arnab-4", "_blank")
  }
  className='bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105'
>
  GitHub
</button>

      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span style={{ background: '-webkit-linear-gradient(45deg, #3490dc, #8a3ab9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
  OpenAI GPT-4
</span>


      </h1>
      <h2 className='desc'>
      Summize, an open-source article summarizer, simplifies reading by transforming lengthy articles into concise summaries for easier understanding
      </h2>
    </header>
  );
};

export default Hero;
