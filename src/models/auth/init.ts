import { $authFxError, $isAuth, authFx } from './'
import { authUserReq, changeAuthTokenForRequests } from '../../api/api'
import { setUserEvent, logoutUserEvent } from '../user'

authFx.use(async (data) => {
  const jwtToken = localStorage.getItem('jwtToken')
  if(jwtToken) {
    changeAuthTokenForRequests(jwtToken)
    const user = await authUserReq()
    setUserEvent(user)
  } else
    throw new Error('no auth')
})

$isAuth.on(authFx.done, () => true)
$isAuth.on(authFx.fail, () => false)
$isAuth.on(logoutUserEvent, () => false)

$authFxError.on(authFx.done, () => null)