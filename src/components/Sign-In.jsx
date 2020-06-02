import React, { useState } from 'react';

import FromInput from '../components/Form-Input';
import CustomButton from '../components/Custom-Button';

import { signInWithGoogle } from '../firebase/firebase.utils'

const SignIn = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [credentials, setCredentials] = useState({ email: '', password: '' })

  const { email, password } = credentials;

  const handlsubmit = (event) => {
    event.preventDefault();
    setCredentials({ email: '', password: '' })
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });

  };

  return (
    <div className='flex flex-col w-96 my-2'>
      <h2 className='mb-4'>I already have an account</h2>
      <span className='block mb-6'>Sign in with your e-mail and password</span>

      <form onSubmit={handlsubmit}>
        <FromInput
          name='email'
          type='email'
          label='Email'
          value={email}
          onChange={handleChange}
          required
        />
        <FromInput
          name='password'
          type='password'
          label='Password'
          value={password}
          onChange={handleChange}
          required
        />
        <div className='flex justify-around'>
          <CustomButton type="submit" >SIGN IN</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn >SIGN IN WITH GOOGLE</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;