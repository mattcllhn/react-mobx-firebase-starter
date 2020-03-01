import React from 'react';
import SignupForm , {SignupFormData} from '../../components/forms/auth/signupForm';
import { observer,inject } from 'mobx-react';

const SignupPage: React.FC<any> = ({authStore}) => {

  function onSubmit(data:SignupFormData){
    authStore.signup(data);
  }

  return (
    <>
    <h1 className = "text-center">Create an Account</h1>
    <SignupForm
    onSubmit = {onSubmit}
    />
    </>

  );
}

export default inject('authStore')(observer(SignupPage))

