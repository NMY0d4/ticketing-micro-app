import { Fragment } from 'react';
import RegistrationForm from '../../components/registrationForm/RegistrationForm';

export default function Signup() {
  return (
    <Fragment>
      <h1>Sign Up</h1>
      <RegistrationForm btnTxt='Sign Up' type='signup' method='post' />
    </Fragment>
  );
}
