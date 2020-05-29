import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../assets/crown.svg';

const Header = () => (
  <div className='flex justify-between mb-6 h-16 w-full '>
    <Link className='h-full w-16 p-6' to='/'>
      <Logo />
    </Link>
    <div className='flex items-center flex-end h-full'>
      <Link className='py-3 px-4' to='/shop'>
        SHOP
      </Link>
      <Link className='py-3 px-4' to='/shop'>
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;