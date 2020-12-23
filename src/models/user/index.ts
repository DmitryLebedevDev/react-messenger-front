import { createEvent, createStore } from "effector"

import { Iuser } from "./interface"

export const setUserEvent = createEvent<Iuser>()
export const logoutUserEvent = createEvent()

export const $user = createStore<Iuser | null>(null)