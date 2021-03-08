import React, { FC, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useStore } from 'effector-react'

import { $isAuth, authFx } from './models/auth'
import { useRoutes } from './Routes'

const App:FC = () => {
  useEffect(() => {authFx()}, [])
  const isAuth = useStore($isAuth)

  const routes = useRoutes(isAuth)

  return routes
}

const AppWithHocs:FC = () => (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)

export default AppWithHocs
