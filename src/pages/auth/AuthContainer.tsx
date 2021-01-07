import React, { FunctionComponent } from 'react'
import { Redirect, Route } from 'react-router-dom'

import { LoginPage } from './LoginPage/LoginPage'
import { RegistrationPage } from './RegistrationPage/RegistrationPage'
import { AuthBg } from './components/AuthBg'
import { QuickRegistrationPage } from './QuickRegistrationPage/QuickRegistrationPage'
import { WhiteWindow } from './components/WhiteWindow'

export const AuthContainer:FunctionComponent = () => {
  return (
    <AuthBg content="center">
      <WhiteWindow>
        <Route exact path='/login' component={LoginPage}/>
        <Route exact path='/quickRegistration' component={QuickRegistrationPage}/>
        <Route exact path='/registration' component={RegistrationPage}/>
        <Redirect to='/login'/>
      </WhiteWindow>
    </AuthBg>
  )
}
