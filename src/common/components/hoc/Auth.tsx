import React, { FunctionComponent } from 'react'
import { useStore } from 'effector-react'
import { Redirect } from 'react-router-dom'

import { $isAuth } from '../../../models/auth'

export const AuthGuard:FunctionComponent = ({children}) => {
  const isAuth = useStore($isAuth)

  if(!isAuth) {
    return <Redirect to='/login'/>
  }

  return (
    <>
      {children}
    </>
  )
}