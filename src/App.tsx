import React, { FunctionComponent, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useStore } from 'effector-react'

import { $isAuth, authFx } from './models/auth'
import { useRoutes } from './Routes'

const App:FunctionComponent = () => {
  useEffect(() => {authFx()}, [])
  const isAuth = useStore($isAuth)

  const routes = useRoutes(isAuth)

  return routes
}

const AppWithHocs:FunctionComponent = () => (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)

export default AppWithHocs
