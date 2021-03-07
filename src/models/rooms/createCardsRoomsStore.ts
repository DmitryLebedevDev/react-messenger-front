import { createEvent, createStore } from "effector"

import { IcardRoom, IcardsRoomsStore, Imessage } from "./intarface"

export const createCardsRoomsStore = () => {
  const addCardsRoomsEvent        = createEvent<IcardRoom[]>()
  const setCardsRoomsEvent        = createEvent<IcardRoom[]>()
  const deleteCardsRoomsEvent     = createEvent<number[]>()
  const addMessageInCardRoomEvent = createEvent<Imessage>()

  const $cardsRoomsStore          = createStore<IcardsRoomsStore>({})

  const addCardToStore = (
    store: IcardsRoomsStore, cardRoom: IcardRoom
  ) => {
    store[cardRoom.id] = cardRoom

    return store
  }

  $cardsRoomsStore
  .on(
    setCardsRoomsEvent,
    (_, cardsRooms) => (
      cardsRooms.reduce(
        addCardToStore,
        {} as IcardsRoomsStore
      )
    )
  )
  .on(
    addCardsRoomsEvent,
    (store, cardsRooms) => (
      cardsRooms.reduce(
        addCardToStore,
        {...store}
      )
    )
  )
  .on(
    deleteCardsRoomsEvent,
    (store, idsCardsRooms) => (
      idsCardsRooms.reduce((store, id) => {
        delete store[id]

        return store
      }, {...store})
    )
  )
  .on(
    addMessageInCardRoomEvent,
    (store, message) => {
      const cardRoom = store[message.room]
            cardRoom.messages.push(message)

      return {...store}
    }
  )

  return {
    $cardsRoomsStore,
    setCardsRoomsEvent,
    addCardsRoomsEvent,
    deleteCardsRoomsEvent,
    addMessageInCardRoomEvent
  }
}