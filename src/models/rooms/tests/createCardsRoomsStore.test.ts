import { createEvent } from 'effector'
import {} from 'jest'

import { createCardsRoomsStore } from '../createCardsRoomsStore'
import { IcardRoom, Imessage } from '../intarface'

const testRoom1: IcardRoom = {
  id: 1,
  createrId: 1,
  messages: [],
  name: '123',
  role: {
    id: 123,
    isBannedUsers: true,
    isDeleteUsersMesseges: true,
    isDeleteYourMesseges: true,
    isMuteUsers: true,
    isSendMessage: true,
    name: '123'
  },
  avatarId: '123',
}
const testRoom2: IcardRoom = {
  ...JSON.parse(JSON.stringify(testRoom1)),
  id: 2
}
const testMessage1InRoom1: Imessage = {
  id: 1,
  room: 1,
  text: '123',
  user: 1
}
const testMessage2InRoom1: Imessage = {
  id: 1,
  room: 1,
  text: '123',
  user: 2
}
const testMessage1InRoom2: Imessage = {
  id: 1,
  room: 2,
  text: '123',
  user: 1
}

const {
  $cardsRoomsStore,
  addCardsRoomsEvent,
  addMessageInCardRoomEvent,
  deleteCardsRoomsEvent,
  setCardsRoomsEvent
} = createCardsRoomsStore()

const clearEvent = createEvent()
$cardsRoomsStore.reset(clearEvent)

afterEach(() => {
  clearEvent()
})

test('createCardsRoomsStore test init state', () => {
  expect(
    Object.keys(
      $cardsRoomsStore.getState()
    ).length)
  .toEqual(0)
})

test('createCardsRoomsStore addCardsRoomsEvent', () => {
  addCardsRoomsEvent([testRoom1])

  expect(
    Object.keys(
      $cardsRoomsStore.getState()
    ).length)
  .toEqual(1)

  expect(
    $cardsRoomsStore.getState()
  ).toEqual({1: testRoom1})


  addCardsRoomsEvent([testRoom1])

  expect(
    Object.keys(
      $cardsRoomsStore.getState()
    ).length)
  .toEqual(1)

  expect(
    $cardsRoomsStore.getState()
  ).toEqual({1: testRoom1})

  addCardsRoomsEvent([testRoom2])

  expect(
    Object.keys(
      $cardsRoomsStore.getState()
    ).length)
  .toEqual(2)

  expect(
    $cardsRoomsStore.getState()
  ).toEqual({1: testRoom1, 2: testRoom2})
})
test('createCardsRoomsStore addCardsRoomsEvent two add', () => {
  addCardsRoomsEvent([testRoom1, testRoom2])

  expect(
    $cardsRoomsStore.getState()
  ).toEqual({1: testRoom1, 2: testRoom2})

  addCardsRoomsEvent([testRoom1, testRoom2])

  expect(
    $cardsRoomsStore.getState()
  ).toEqual({1: testRoom1, 2: testRoom2})
})

test('createCardsRoomsStore setCardsRoomsEvent', () => {
  setCardsRoomsEvent([testRoom1])
  expect(
    $cardsRoomsStore.getState()
  ).toEqual({1: testRoom1})

  setCardsRoomsEvent([testRoom2])
  expect(
    $cardsRoomsStore.getState()
  ).toEqual({2: testRoom2})
})
test('createCardsRoomsStore setCardsRoomsEvent two add', () => {
  setCardsRoomsEvent([testRoom1, testRoom2])

  expect(
    $cardsRoomsStore.getState()
  ).toEqual({1: testRoom1, 2: testRoom2})
})

test('createCardsRoomsStore deleteCardsRoomsEvent', () => {
  setCardsRoomsEvent([testRoom1, testRoom2])

  deleteCardsRoomsEvent([1,2])
  expect($cardsRoomsStore.getState()).toEqual({})

  setCardsRoomsEvent([testRoom1])

  deleteCardsRoomsEvent([2])
  expect($cardsRoomsStore.getState()).toEqual({1: testRoom1})

  deleteCardsRoomsEvent([1])
  expect($cardsRoomsStore.getState()).toEqual({})
})

test('createCardsRoomsStore addMessageInCardRoomEvent', () => {
  setCardsRoomsEvent([testRoom1, testRoom2])

  addMessageInCardRoomEvent(testMessage1InRoom1)
  expect($cardsRoomsStore.getState()[1].messages).toEqual([testMessage1InRoom1])
  expect($cardsRoomsStore.getState()[2].messages).toEqual([])

  addMessageInCardRoomEvent(testMessage2InRoom1)
  expect($cardsRoomsStore.getState()[1].messages).toEqual([testMessage1InRoom1, testMessage2InRoom1])

  addMessageInCardRoomEvent(testMessage1InRoom2)
  expect($cardsRoomsStore.getState()[1].messages).toEqual([testMessage1InRoom1, testMessage2InRoom1])
  expect($cardsRoomsStore.getState()[2].messages).toEqual([testMessage1InRoom2])
})