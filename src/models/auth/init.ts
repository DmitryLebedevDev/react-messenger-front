import { forward, Unit } from 'effector'

import { $isAuth, authEvent, authFx, loginFx, logoutEvet, quickRegistrationFx, registrationFx } from './'
import { authUserReq, changeAuthTokenForRequests, loginReq, quickRegistrationReq, registrationReq } from '../../api/api'
import { setUserEvent } from '../user'

const setJwtTokenInLocalStorage = (jwtToken: string) => {
  localStorage.setItem('jwtToken', jwtToken);
}
const getJwtTokenOfLocalStorage = () => {
  return localStorage.getItem('jwtToken');
}

authFx.use(async (token) => {
  const jwtToken = token || getJwtTokenOfLocalStorage();

  if(jwtToken) {
    changeAuthTokenForRequests(jwtToken)
    const user = await authUserReq()

    return user;
  } else
    throw new Error('no auth')
})

registrationFx.use(async data => {
  const {
    access_token,
    ...user
  } = await registrationReq(data)

  setJwtTokenInLocalStorage(access_token);
  changeAuthTokenForRequests(access_token);

  return user
})

quickRegistrationFx.use(async data => {
  const {
    email,
    password,
    access_token,
    ...user
  } = await quickRegistrationReq(data);

  setJwtTokenInLocalStorage(access_token);
  changeAuthTokenForRequests(access_token);

  const next = () => {
    setUserEvent({email,...user});
    authEvent();
  }

  return {
    userInfo: {
      email,
      password
    },
    next
  }
})

loginFx.use(async (data) => {
  const {access_token} = await loginReq(data)

  setJwtTokenInLocalStorage(access_token)

  return access_token
})
forward({
  from: loginFx.doneData,
  to: authFx
})

$isAuth.on(
  [
    authEvent,
    authFx.done,
    registrationFx.done,
  ] as Unit<any>[],
  () => true
)
$isAuth.on(
  [
    logoutEvet,
    authFx.fail,
  ] as Unit<any>[],
  () => false
)