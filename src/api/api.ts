import axios, { AxiosResponse } from 'axios'

import { env } from 'process'
import { Iuser } from '../models/user/interface'
import { IquickRegistrationDataReq, IregistrationDataReq, IregistrationDataRes } from './api.interface'

const api = axios.create({
  baseURL: env.REACT_APP_BASE_URL
})

export const changeAuthTokenForRequests = (token: string) => {
  Object.assign(api.defaults.headers, {
    Authorization: `Bearer ${token}`
  })
  return api;
}
const getDataOfRequest = <T>(response: Promise<AxiosResponse<T>>) => (
  response.then(info => info.data)
)

export const authUserReq = () => (
  getDataOfRequest(api.get<Iuser>('auth'))
)

export const quickRegistrationReq = (data: IquickRegistrationDataReq) => (
  getDataOfRequest(
    api.post<IregistrationDataRes>('auth/quick-registration', data)
  )
)

export const registrationReq = (data: IregistrationDataReq) => (
  getDataOfRequest(
    api.post<IregistrationDataRes>('/auth/registration', data)
  )
)