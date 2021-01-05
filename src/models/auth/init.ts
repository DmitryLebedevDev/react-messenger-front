import { Unit } from 'effector'

import { $isAuth, authFx, registrationFx } from './'
import { authUserReq, changeAuthTokenForRequests, quickRegistrationReq, registrationReq } from '../../api/api'
import { logoutUserEvent } from '../user'

authFx.use(async () => {
  const jwtToken = localStorage.getItem('jwtToken')
  if(jwtToken) {
    changeAuthTokenForRequests(jwtToken)
    const user = await authUserReq()

    return user;
  } else
    throw new Error('no auth')
})

registrationFx.use(async reqInfo => {
  const {access_token, ...user} = reqInfo.type === 'quick' ?
  await quickRegistrationReq(reqInfo.data)
  :
  await registrationReq(reqInfo.data)

  localStorage.setItem('jwtToken', access_token);
  changeAuthTokenForRequests(access_token);

  return user
})

$isAuth.on(
  [
    authFx.done,
    registrationFx.done,
  ] as Unit<any>[],
  () => true
)
$isAuth.on(
  [
    authFx.fail,
    logoutUserEvent
  ] as Unit<any>[],
  () => false
)