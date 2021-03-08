import { forward } from 'effector'

import {
  $roomStatus,
  $searchCardsRooms,
  activeSearchRoomsEvent,
  activeUserRoomsEvent,
  getCardsRoomsSFx,
  getCardsRoomsUFx,
  setCardsRoomsSEvent,
  setCardsRoomsUEvent
} from '.'
import { roomsStatus } from './intarface'
import { getCardsRoomsUserReq, getSimilarRoomsReq } from '../../api/api'
import { setUserEvent } from '../user'
import { CancelEffectError } from '../common/errors/CancelEffectError'

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

getCardsRoomsSFx.use(async ({q, isCancel}) => {
  const cardsRooms = getSimilarRoomsReq(q);
  isCancel(q) && new CancelEffectError();

  return cardsRooms;
})
forward({
  from: getCardsRoomsSFx.doneData,
  to: setCardsRoomsSEvent
})

$roomStatus
  .on(activeUserRoomsEvent, () => roomsStatus.userRoom)
  .on(activeSearchRoomsEvent, () => roomsStatus.searchRoom)
$searchCardsRooms.reset(activeSearchRoomsEvent)