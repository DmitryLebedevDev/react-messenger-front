import { useStore } from 'effector-react';
import React, { FunctionComponent } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { $isAuth } from './models/auth';

import { AuthContainer } from './pages/auth/AuthContainer'

const App:FunctionComponent = () => {
  console.log("APP RERENDER");

  return (
    <Switch>
      <Route component={AuthContainer}/>
    </Switch>
  );
}

const Auth:FunctionComponent = ({children}) => {
  const isAuth = useStore($isAuth);

  if(!isAuth) {
    return <Redirect to='/login'/>
  }

  return (
    <>
      {children}
    </>
  );
}

const AppWithHocs:FunctionComponent = () => (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)

export default AppWithHocs;
