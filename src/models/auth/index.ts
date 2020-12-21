import { createEffect, createStore } from "effector"

import { changeAuthTokenForRequests } from '../../api/api'

export const isAuth$ = createStore(false)

export const authFx = createEffect<void,boolean,Error>(
  () => {
    const jwtToken = localStorage.getItem('jwtToken');
    if(jwtToken) {
      changeAuthTokenForRequests(jwtToken);
    }
    throw new Error('no auth');
  }
)