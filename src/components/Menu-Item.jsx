import React from 'react';

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`group flex flex-auto items-center justify-center overflow-hidden min-w-1/4 ${size ? 'h-88' : 'h-64'} border border-gray-900 mt-0 mx-2 mb-4 cursor-pointer last:border-b-20`}>
    <div className='w-full h-full bg-cover bg-center transform group-hover:scale-110 duration-700 ease-out-quad' style={{
      backgroundImage: `url(${imageUrl})`
    }} />
    <div className='flex flex-col items-center justify-center absolute h-24 py-0 px-6 border border-gray-800 bg-white opacity-50 group-hover:opacity-75'>
      <h1 className='font-bold mb-1 text-xl text-gray-700'>{title.toUpperCase()}</h1>
      <span className='font-bold text-sm text-gray-700'>SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;