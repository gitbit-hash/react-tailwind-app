import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { auth } from '../firebase/firebase.utils';

import { ReactComponent as Logo } from '../assets/crown.svg';


const Header = ({ currentUser }) => (
  <div className='flex justify-between w-full mb-6 h-16'>
    <Link className='h-full w-16 py-3 px-1 mx-3' to='/'>
      <Logo />
    </Link>
    <div className='flex items-center flex-end h-full'>
      <Link className='py-3 px-1 mx-3 text-xl font-medium text-gray-600 transition duration-200 ease-in-out hover:font-semibold active:bg-red-700' to='/shop'>
        SHOP
      </Link>
      <Link className='py-3 px-1 mx-3 text-xl font-medium text-gray-600 transition duration-200 ease-in-out hover:font-semibold' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ?
          (<div className='cursor-pointer py-3 px-1 mx-3 text-xl font-medium text-gray-600 transition duration-200 ease-in-out hover:font-semibold' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>)
          :
          (<Link className='py-3 px-1 mx-3 text-xl font-medium text-gray-600 transition duration-200 ease-in-out hover:font-semibold'
            to='/signin'>
            SIGN IN
          </Link>)
      }

    </div>
  </div>
);

export default Header;