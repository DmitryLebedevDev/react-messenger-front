import React, { FunctionComponent } from 'react'
import { Switch, Route } from 'react-router-dom'

import { LoginPage } from './LoginPage'
import { RegistrationPage } from './RegistrationPage'
import { AuthBg } from './components/AuthBg';
import { QuickRegistrationPage } from './QuickRegistrationPage';

export const AuthContainer:FunctionComponent = () => {
  return (
    <AuthBg>
      <Switch>
        <Route path='/login' component={LoginPage}/>
        <Route path='/quickRegistration' component={QuickRegistrationPage}/>
        <Route path='/registration' component={RegistrationPage}/>
      </Switch>
    </AuthBg>
  )
}
