import axios, { AxiosResponse } from 'axios'

import { Iuser } from '../models/user/interface'
import { IquickRegistrationDataReq, IregistrationDataReq, IregistrationDataRes } from './api.interface'

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
})

export const changeAuthTokenForRequests = (token: string) => {
  Object.assign(api.defaults.headers, {
    Authorization: `Bearer ${token}`
  })
  return api;
}
const getDataOfRequest = <T>(response: Promise<AxiosResponse<T>>) => (
  response
    .then(info => info.data)
    .catch(({request: {status, response}}) => {
      const errorInfo = JSON.parse(response);
      return Promise.reject({
        status,
        message: errorInfo.message || 'Request failed, please try again'
      })
    })
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