import { createEffect, createEvent, createStore } from "effector"

export const authFx = createEffect<void,void,Error>()

export const $isAuth = createStore(false)