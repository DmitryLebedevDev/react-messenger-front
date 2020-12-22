import { $isAuth, authFx } from './'
import { authUserReq, changeAuthTokenForRequests } from '../../api/api'
import { setUserEvent } from '../user/index'

authFx.use(async () => {
  const jwtToken = localStorage.getItem('jwtToken')
  if(jwtToken) {
    changeAuthTokenForRequests(jwtToken)
    const user = await authUserReq()
    setUserEvent(user)
  }
  throw new Error('no auth')
})

$isAuth.on(authFx.done, () => true)
$isAuth.on(authFx.fail, () => false)