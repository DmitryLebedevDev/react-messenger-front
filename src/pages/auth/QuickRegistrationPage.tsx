import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

import { FormHeader } from './components/FormHeader'

export const QuickRegistrationPage:FunctionComponent = () => {
  return (
    <>
      <FormHeader variant="quickRegistrationPage"/>
      quick reg
      <Link to={'/login'}>
        login
      </Link>
    </>
  )
}
