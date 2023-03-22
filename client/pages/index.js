import buildClient from '../api/build-client';
import React from 'react';

export default function LandingPage({ currentUser }) {
  // axios.get('/api/users/currentuser');

  return <h1>{`You are${currentUser ? '' : ' NOT'} signed in`}</h1>;
}

LandingPage.getInitialProps = async (context) => {  
  const client = buildClient(context);
  const { data } = await client
    .get('/api/users/currentuser')
    .catch((err) => console.log(err.message));

  return data;
};
