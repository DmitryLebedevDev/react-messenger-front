import React from 'react';
import AuthContainer from './pages/auth/AuthContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  console.log("APP RERENDER");

  return (
    <Switch>
      <Route component={AuthContainer}/>
    </Switch>
  );
}

const AppWithHocs = () => (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)

export default AppWithHocs;
