import React from 'react';

const CustomButton = ({ children, ...otherPros }) => (
  <button className='min-w-1/3 w-auto h-10 tracking-wide py-0 px-6 bg-gray-900 text-white font-sans font-bold outline-none rounded-none border cursor-pointer hover:text-black hover:border border-black hover:bg-white' {...otherPros} >
    {
      children
    }
  </button>
);

export default CustomButton;