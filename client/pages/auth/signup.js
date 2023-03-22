import { Fragment } from 'react';
import RegistrationForm from '../../components/registrationForm/';

export default function Signup() {
  return (
    <Fragment>
      <h1 className='m-4'>Sign Up</h1>
      <RegistrationForm btnTxt='Sign Up' type='signup' method='post' />
    </Fragment>
  );
}
