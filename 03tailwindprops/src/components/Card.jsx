import React from 'react';

function Card() {
  return (
    <div className='bg-white rounded-xl border border-gray-200 p-6 duration-300'>
      <div className='flex items-center justify-center w-12 h-12 bg-cyan-100 rounded-lg mb-6'>
        <svg className='w-6 h-6 text-cyan-700' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 10V3L4 14h7v7l9-11h-7z' />
        </svg>
      </div>
      <h3 className='text-xl font-bold text-gray-900 mb-3'>Lightning Fast</h3>
      <p className='text-gray-600 mb-6 leading-relaxed'>
        Experience blazing fast performance with our optimized infrastructure designed for speed and reliability.
      </p>
      <a href='#' className='inline-flex items-center text-cyan-700 font-semibold hover:text-cyan-800 transition-colors'>
        Learn more
        <svg className='w-4 h-4 ml-2' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' />
        </svg>
      </a>
    </div>
  );
}

export default Card;
