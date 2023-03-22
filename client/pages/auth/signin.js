import { Fragment } from 'react';
import RegistrationForm from '../../components/registrationForm';

export default function Signin() {
  return (
    <Fragment>
      <h1 className='m-4'>Sign In</h1>
      <RegistrationForm btnTxt='Sign In' type='signin' method='post' />
    </Fragment>
  );
}
