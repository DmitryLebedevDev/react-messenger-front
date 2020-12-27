import React from 'react'
import { AuthContainer } from './pages/auth/AuthContainer'

export const useRoutes = (isAuth: boolean | null) => {
  if(isAuth === null) {
    return <div></div>
  }

  return isAuth ?
  <div>app</div>
  :
  <AuthContainer/>
}
