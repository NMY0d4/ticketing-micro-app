import React, { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: { email, password },
    onSuccess: () => {
      Router.push('/');
    },
  });

  const setEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const setPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await doRequest();
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Signup</h1>
      <div className='form-group'>
        <label htmlFor='email'>Email Address</label>
        <input
          id='email'
          value={email}
          onChange={setEmailHandler}
          type='text'
          className='form-control'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          value={password}
          onChange={setPasswordHandler}
          type='password'
          className='form-control'
        />
      </div>
      {errors}

      <button className='btn btn-primary'>Sign Up</button>
    </form>
  );
}
