import React, { FunctionComponent } from 'react'
import { Switch, Route } from 'react-router-dom'

import { LoginPage } from './LoginPage'
import { RegistrationPage } from './RegistrationPage'

export const AuthContainer:FunctionComponent = () => {
  return (
    <Switch>
      <Route path='/login' component={LoginPage}/>
      <Route path='/registration' component={RegistrationPage}/>
    </Switch>
  )
}
