import React, { FunctionComponent } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { useRoutes } from './Routes';

const App:FunctionComponent = () => {
  console.log("APP RERENDER");
  const routes = useRoutes(false);

  return routes;
}

const AppWithHocs:FunctionComponent = () => (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)

export default AppWithHocs;
