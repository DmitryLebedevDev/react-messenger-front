import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

export const RegistrationPage:FunctionComponent = () => {
  return (
    <>
      reg
      <Link to={'/login'}>
        login
      </Link>
    </>
  )
}
