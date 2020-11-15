import React, { FunctionComponent } from 'react'
import { Switch, Route } from 'react-router-dom'

import { LoginPage } from './LoginPage'
import { RegistrationPage } from './RegistrationPage'
import { AuthBg } from './components/AuthBg';
import { QuickRegistrationPage } from './QuickRegistrationPage';
import { WhiteWindow } from './components/WhiteWindow';

export const AuthContainer:FunctionComponent = () => {
  return (
    <AuthBg>
      <WhiteWindow>
        <Switch>
          <Route path='/login' component={LoginPage}/>
          <Route path='/quickRegistration' component={QuickRegistrationPage}/>
          <Route path='/registration' component={RegistrationPage}/>
        </Switch>
      </WhiteWindow>
    </AuthBg>
  )
}
