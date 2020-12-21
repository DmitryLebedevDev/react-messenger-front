import React, { FunctionComponent } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

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
  return (
    <>
      {children}
    </>
  );
}

const AppWithHocs:FunctionComponent = () => (
  <BrowserRouter>
    <Auth>
      <App/>
    </Auth>
  </BrowserRouter>
)

export default AppWithHocs;
