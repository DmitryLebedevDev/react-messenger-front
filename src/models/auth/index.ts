import { createEffect, createEvent, createStore } from "effector"

import { createEffectStatus } from '../common/hocs'
import { IloginDataReq, IquickRegistrationDataReq, IregistrationDataReq, IReqError } from "../../api/api.interface"
import { Iuser } from "../user/interface"
import { IquickRegistrationFxNextStep } from "./interface"

export const authEvent = createEvent()
export const logoutEvent = createEvent()
export const $isAuth = createStore<boolean | null>(null)

export const authFx = createEffect<
  string | void,
  Iuser,
  IReqError
>()
export const $authFxStatus = createEffectStatus(authFx, $isAuth)

export const registrationFx = createEffect<
  IregistrationDataReq,
  Iuser,
  IReqError
>();
export const $registrationFxStatus = createEffectStatus(registrationFx)

export const quickRegistrationFx = createEffect<
  IquickRegistrationDataReq,
  IquickRegistrationFxNextStep,
  IReqError
>();
export const $quickRegistrationFxStatus = createEffectStatus(quickRegistrationFx)

export const loginFx = createEffect<
  IloginDataReq,
  string,
  IReqError
>()
export const loginFxStatus = createEffectStatus(loginFx)