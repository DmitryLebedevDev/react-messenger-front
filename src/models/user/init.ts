import { $user, setUserEvent } from './'

$user
  .on(setUserEvent, (_,user) => user)