import { forward } from "effector"

import {
  $roomStatus,
  activeSearchRoomsEvent,
  activeUserRoomsEvent,
  getCardsRoomsUFx,
  setCardsRoomsUEvent
} from "."
import { roomsStatus } from "./intarface"
import { getCardsRoomsUserReq } from '../../api/api'
import { setUserEvent } from "../user"

getCardsRoomsUFx.use(async (userId) => {
  return getCardsRoomsUserReq(userId)
})
forward({
  from: setUserEvent.map(({id}) => id),
  to: getCardsRoomsUFx
})
forward({
  from: getCardsRoomsUFx.doneData,
  to: setCardsRoomsUEvent
})

$roomStatus
  .on(activeUserRoomsEvent, () => roomsStatus.userRoom)
  .on(activeSearchRoomsEvent, () => roomsStatus.searchRoom)