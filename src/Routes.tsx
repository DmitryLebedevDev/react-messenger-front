import React from 'react'

import { Loader } from './common/components/loader'
import { AuthContainer } from './pages/auth/AuthContainer'

export const useRoutes = (isAuth: boolean | null) => {
  if(isAuth === null) {
    return <Loader/>
  }

  return isAuth ?
  <div>app</div>
  :
  <AuthContainer/>
}
