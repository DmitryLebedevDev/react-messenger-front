import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

export const LoginPage:FunctionComponent = () => {
  return (
    <>
      login
      <Link to={'/registration'}>
        reg
      </Link>
    </>
  )
}
