import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

import { AuthBg } from './components/AuthBg'

export const QuickRegistration:FunctionComponent = () => {
  return (
    <AuthBg>
      quick reg
      <Link to={'/login'}>
        login
      </Link>
    </AuthBg>
  )
}
