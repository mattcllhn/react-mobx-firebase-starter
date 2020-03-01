import React from 'react';
import { observer,inject } from 'mobx-react'

const DashboardPage: React.FC<any> = ({authStore}) => {
  return (
    <div >
        this is the dashboard page
        <button onClick = {()=> authStore.logout()}>Log Out</button>
    </div>
  );
}

export default inject('authStore')(observer(DashboardPage))
