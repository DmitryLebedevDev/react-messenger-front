import { combine, createEffect, createStore, restore } from "effector"

export const $isAuth = createStore<boolean | null>(null)

export const authFx = createEffect<void,void,Error>()
export const $authFxError = restore(authFx.failData, null)
export const $authFxStatus = combine({
  pending: authFx.pending,
  error: $authFxError,
  data: $isAuth
})