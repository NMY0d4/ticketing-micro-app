import 'bootstrap/dist/css/bootstrap.css';

import React, { Fragment } from 'react';
import buildClient from '../api/build-client';
import Header from '../components/Header';

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <Fragment>
      <Header currentUser={currentUser}/>
      <Component {...pageProps} />;
    </Fragment>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return {
    pageProps,
    ...data,
  };
};

export default AppComponent;
