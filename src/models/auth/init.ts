import { $authFxError, $isAuth, authFx } from './'
import { authUserReq, changeAuthTokenForRequests } from '../../api/api'
import { setUserEvent, logoutUserEvent } from '../user'

$isAuth.on(authFx.done, () => true)
$isAuth.on(authFx.fail, () => false)
$isAuth.on(logoutUserEvent, () => false)

authFx.use(async () => {
  const jwtToken = localStorage.getItem('jwtToken')
  if(jwtToken) {
    changeAuthTokenForRequests(jwtToken)
    const user = await authUserReq()
    setUserEvent(user)
  } else
    throw new Error('no auth')
})

$authFxError.on(authFx.done, () => null)
