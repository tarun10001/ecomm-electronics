import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import CommonForm from '../../components/common/form';
import { loginFormControls } from '../../config';

const initialState = {
  email : '',
  password : ''
}

const AuthLogin = () => {
  const [formData, setFomData] = useState(initialState);

  const onSubmit = () => {

  }
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Sign in to your account</h1>
        <p className='mt-2'>Don't have an account</p>
        <Link className='font-medium ml-2 text-primary hover:underline' to='/auth/register'>Register</Link>
      </div>
      <CommonForm
      formControls={loginFormControls}
      buttonText={'Sign in'}
      formData={formData}
      setFomData={setFomData}
      onSubmit={onSubmit}
      />
    </div>
  )
}

export default AuthLogin;
