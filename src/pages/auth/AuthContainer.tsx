import React, { FunctionComponent } from 'react'
import { Route } from 'react-router-dom'

import { LoginPage } from './LoginPage'
import { RegistrationPage } from './RegistrationPage'
import { AuthBg } from './components/AuthBg';
import { QuickRegistrationPage } from './QuickRegistrationPage'
import { WhiteWindow } from './components/WhiteWindow'

export const AuthContainer:FunctionComponent = () => {
  return (
    <AuthBg content="center">
      <WhiteWindow>
        <Route path='/login' component={LoginPage}/>
        <Route path='/quickRegistration' component={QuickRegistrationPage}/>
        <Route path='/registration' component={RegistrationPage}/>
      </WhiteWindow>
    </AuthBg>
  )
}
