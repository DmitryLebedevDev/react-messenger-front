import React from 'react'
import { Link } from 'react-router-dom'

import { AuthBg } from './components/AuthBg'

export const RegistrationPage = () => {
  return (
    <AuthBg>
      reg
      <Link to={'/login'}>
        login
      </Link>
    </AuthBg>
  )
}
