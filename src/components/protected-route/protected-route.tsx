import React from 'react';
import {
  Route,
  Redirect,
} from "react-router-dom";
// import AuthStore from '../../stores/authStore';
import {inject, observer} from 'mobx-react'
import fire from '../firebase';

const ProtectedRoute:React.FC<any> = ({ component: Component, render,  authStore, ...rest})=>{

console.log(authStore);
console.log(fire.auth());
    return (
      <>
      {authStore.hydrated &&
      <Route
      {...rest}
      render={(props) =>{
        return(
          authStore.hydrated && !!authStore.uid? (
          render?
            render():
            <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
        )
      }
    }
    />
      }

      </>
    );
  }
  export default inject('authStore')(observer(ProtectedRoute))
