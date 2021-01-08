import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { Loader } from './common/components/loader'
import { AuthContainer } from './pages/auth/AuthContainer'
import { Chat } from './pages/chat/Chat'

export const useRoutes = (isAuth: boolean | null) => {
  if(isAuth === null) {
    return <Loader/>
  }

  return isAuth ?
  <Switch>
    <Route path="/" component={Chat}/>
    <Redirect to="/"/>
  </Switch>
  :
  <AuthContainer/>
}
