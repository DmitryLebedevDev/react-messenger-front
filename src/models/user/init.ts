import { $user, logoutUserEvent, setUserEvent } from './'
import { Iuser } from './interface'

$user
  .on(setUserEvent, (_,user) => user)
  .on(logoutUserEvent, () => null)