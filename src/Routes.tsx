import React from 'react'
import { AuthContainer } from './pages/auth/AuthContainer'

export const useRoutes = (isAuth: boolean) => {
  return isAuth ?
  <div>test</div>
  :
  <AuthContainer/>
}
