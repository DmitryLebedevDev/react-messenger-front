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

const AppWithHocs:FunctionComponent = () => (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)

export default AppWithHocs;
