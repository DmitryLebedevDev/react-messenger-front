import {} from 'jest'

import { $user, setUserEvent } from '..'
import { logoutEvent } from '../../auth'
import { Iuser } from '../interface'
import '../init'

const testUser: Iuser = {
  id: 1,
  email: '123@test.ru',
  firstName: '123',
  lastName: '2312',
}

test('testing $user init state', () => {
  expect($user.getState()).toEqual(null)
})

test('testing $user set user event', () => {
  setUserEvent(testUser)

  expect($user.getState()?.id).toEqual(testUser.id)
  expect($user.getState()?.email).toEqual(testUser.email)
  expect($user.getState()?.firstName).toEqual(testUser.firstName)
  expect($user.getState()?.lastName).toEqual(testUser.lastName)
})

test('testing $user logout', () => {
  expect($user.getState()?.id).toEqual(testUser.id)

  logoutEvent()

  expect($user.getState()).toEqual(null)
})