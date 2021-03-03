import { authFx, logoutEvent, registrationFx } from '../auth'
import { $user, setUserEvent } from './'

$user
  .on(
    [
      setUserEvent,
      authFx.doneData,
      registrationFx.doneData
    ],
    (_,user) => user
  )
  .reset(logoutEvent)