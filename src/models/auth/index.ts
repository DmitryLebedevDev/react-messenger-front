import { createEffect, createStore } from "effector"

import { createEffectStatus } from '../common/hoc'
import { IquickRegistrationDataReq, IregistrationDataReq, IReqError } from "../../api/api.interface"
import { Iuser } from "../user/interface"

export const $isAuth = createStore<boolean | null>(null)

export const authFx = createEffect<void,Iuser,IReqError>()
export const $authFxStatus = createEffectStatus(authFx, $isAuth)

export const registrationFx = createEffect<
  {type: 'full', data: IregistrationDataReq} |
  {type: 'quick', data: IquickRegistrationDataReq},
  Iuser,
  IReqError
>();
export const $registrationFxStatus = createEffectStatus(registrationFx);

export const loginFx = createEffect()