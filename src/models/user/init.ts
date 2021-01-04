import { authFx, registrationFx } from '../auth'
import { $user, logoutUserEvent, setUserEvent } from './'

$user
  .on(
    [
      setUserEvent,
      authFx.doneData,
      registrationFx.doneData
    ],
    (_,user) => user
  )
  .reset(logoutUserEvent)