import { combine, createEffect, createEvent, createStore } from "effector"

import { createEffectStatus } from "../common/hocs"
import { createCardsRoomsStore } from "./createCardsRoomsStore"
import { IcardRoom, roomsStatus } from "./intarface"

export const {
  $cardsRoomsStore: $userCardsRooms,
  setCardsRoomsEvent: setCardsRoomsUEvent,
  deleteCardsRoomsEvent: deleteCardsRoomsUEvent,
  addMessageInCardRoomEvent: addMessageInCardRoomUEvent
} = createCardsRoomsStore()

export const {
  $cardsRoomsStore: $searchCardsRooms,
  setCardsRoomsEvent: setCardsRoomsSEvent,
  deleteCardsRoomsEvent: deleteCardsRoomsSEvent,
  addMessageInCardRoomEvent: addMessageInCardRoomSEvent
} = createCardsRoomsStore()

export const activeUserRoomsEvent   = createEvent()
export const activeSearchRoomsEvent = createEvent()
export const $roomStatus            = createStore(roomsStatus.userRoom)

export const $rooms = combine(
  {$userCardsRooms,$searchCardsRooms,$roomStatus},
  ({$userCardsRooms,$searchCardsRooms,$roomStatus}) => {
    return $roomStatus === roomsStatus.userRoom ?
      $userCardsRooms : $searchCardsRooms
  }
)

export const getCardsRoomsUFx        = createEffect<number, IcardRoom[]>()
export const $getCardsRoomsUFxStatus = createEffectStatus(getCardsRoomsUFx, $rooms)

export const getCardsRoomsSFx        = createEffect<string, IcardRoom[]>()
export const $getCardsRoomsSFxStatus = createEffectStatus(getCardsRoomsUFx, $rooms)

export const $currentRoomsInfo = combine({
   $rooms,
   $getCardsRoomsUFxStatus,
   $getCardsRoomsSFxStatus
  },
  ({
    $rooms,
    $getCardsRoomsUFxStatus,
    $getCardsRoomsSFxStatus
  }) => ({
    pending: $getCardsRoomsUFxStatus.pending || $getCardsRoomsSFxStatus.pending,
    error: $getCardsRoomsUFxStatus.error || $getCardsRoomsSFxStatus.error,
    rooms: $rooms
  })
)