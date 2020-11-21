import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

import { FormHeader } from './components/FormHeader'

export const RegistrationPage:FunctionComponent = () => {
  return (
    <>
      <FormHeader variant="registration"/>
      reg
      <Link to={'/login'}>
        login
      </Link>
    </>
  )
}
