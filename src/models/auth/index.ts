import { combine, createEffect, createStore, restore } from "effector"

import { IquickRegistrationDataReq, IregistrationDataReq } from "../../api/api.interface"
import { Iuser } from "../user/interface"

export const $isAuth = createStore<boolean | null>(null)

export const authFx = createEffect<void,Iuser,Error>()
export const $authFxError = restore(authFx.failData, null)
export const $authFxStatus = combine({
  pending: authFx.pending,
  error: $authFxError,
  data: $isAuth
})

export const registrationFx = createEffect<
  {type: 'full', data: IregistrationDataReq} |
  {type: 'quick', data: IquickRegistrationDataReq},
  Iuser,
  Error
>();
export const $registrationFxError = restore(registrationFx.failData,null)
export const $registrationFxStatus = combine({
  pending: registrationFx.pending,
  error: $registrationFxError
})

export const loginFx = createEffect()