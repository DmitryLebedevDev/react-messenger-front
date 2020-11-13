import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

import { AuthBg } from './components/AuthBg'

export const LoginPage:FunctionComponent = () => {
  return (
    <AuthBg>
      login
      <Link to={'/registration'}>
        reg
      </Link>
    </AuthBg>
  )
}
