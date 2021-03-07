import { authFx, logoutEvent, registrationFx } from '../auth'
import { $user, setUserEvent } from './'

$user
  .on(
    setUserEvent,
    (_,user) => user
  )
  .reset(logoutEvent)