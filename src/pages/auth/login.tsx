import React from 'react';
import LoginForm, {LoginFormData} from '../../components/forms/auth/loginForm';
import { observer,inject } from 'mobx-react';

const LoginPage: React.FC<any> = ({authStore}) => {
  console.log(authStore)
  function onSubmit(obj:LoginFormData){
    authStore.login(obj)
  }

  return (
    <div>        
     <h2 className = "text-center">Login</h2>
      <LoginForm 
        emailLabel = {'Email'} 
        passwordLabel = {'Password'} 
        onSubmit = {onSubmit}/>
    </div>
  );
}
export default inject('authStore')(observer(LoginPage))

