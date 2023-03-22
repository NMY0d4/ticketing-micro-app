import React, { useState } from 'react';
import axios from 'axios';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const setPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post('/api/users/signup', {
      email,
      password,
    });

    console.log(response.data);
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
      <button className='btn btn-primary'>Sign Up</button>
    </form>
  );
}
