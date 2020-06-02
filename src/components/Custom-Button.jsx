import React from 'react';

const CustomButton = ({ children, isGoogleSignIn, ...otherPros }) => (
  <button className={`${isGoogleSignIn ? 'bg-blue-500 hover:bg-blue-600 hover:border-blue-600 hover:text-white' : ''} min-w-1/3 w-auto h-12 tracking-wide py-0 px-6 bg-gray-900 text-white font-sans font-bold rounded-none border border-transparent cursor-pointer hover:text-black hover:border-black hover:bg-white`} {...otherPros} >
    {
      children
    }
  </button>
);

export default CustomButton;