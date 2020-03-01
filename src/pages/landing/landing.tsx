import React from 'react';
import { observer,inject } from 'mobx-react';
import './landing.scss'
import { Link } from 'react-router-dom';

const LandingPage: React.FC<any> = ({authStore}) => {


  return (
    <div className = "pageImg"  >

        this is the landing page
        <ul>
          <li>
            <Link to = {'/login'}>Login</Link>
          </li>
          <li>
            <Link to = {'/signup'}>Sign Up</Link>
          </li>
          <li>
            <Link to = {'/dashboard'}>Dashboard</Link>
          </li>
        </ul>
        
    </div>
  );
}

export default inject('authStore')(observer(LandingPage))