import axios from 'axios';
import React from 'react';

export default function LandingPage({ currentUser }) {
  // axios.get('/api/users/currentuser');
  console.log(currentUser);
  return (
    <div>
      <h1>Landing page</h1>
    </div>
  );
}

LandingPage.getInitialProps = async () => {
  if (typeof window === 'undefined') {
    // we are on the server!
    const { data } = await axios
      .get(
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
        {
          headers: {
            Host: 'ticketing.dev',
          },
        }
      )
      .catch((err) => {
        console.log(err.message);
      });
    return data;
  } else {
    // we are on the browser
    const { data } = await axios.get('/api/users/currentuser').catch((err) => {
      console.log(err.message);
    });
    return data;
  }
  return {};
  //   const response = await axios.get('/api/users/currentuser').catch((err) => {
  //     console.log(err.message);
  //   });

  //   return response.data;
};
