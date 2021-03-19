import axios, { AxiosResponse } from 'axios'
import { IcardRoom } from '../models/rooms/intarface'

import { Iuser } from '../models/user/interface'
import {
  IloginDataReq,
  IloginDataRes,
  IquickRegistrationDataReq,
  IquickRegistrationDataRes,
  IregistrationDataReq,
  IregistrationDataRes
} from './api.interface'

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
})

export const changeAuthTokenForRequests = (token: string) => {
  Object.assign(api.defaults.headers, {
    Authorization: `Bearer ${token}`
  })
  return api
}
const getDataOfRequest = <T>(response: Promise<AxiosResponse<T>>) => (
  response
    .then(info => info.data)
    .catch(({request: {status, response}}) => {
      const errorInfo = JSON.parse(
        response ?
          response
          :
          `{"message": "Request failed, please try again"}`
      )

      return Promise.reject({
        status,
        message: errorInfo.message
      })
    })
)

export const authUserReq = () => (
  getDataOfRequest(api.get<Iuser>('auth'))
)

export const quickRegistrationReq = (data: IquickRegistrationDataReq) => (
  getDataOfRequest(
    api.post<IquickRegistrationDataRes>('auth/quick-registration', data)
  )
)

export const registrationReq = (data: IregistrationDataReq) => (
  getDataOfRequest(
    api.post<IregistrationDataRes>('/auth/registration', data)
  )
)

export const loginReq = (data: IloginDataReq) => (
  getDataOfRequest(
    api.post<IloginDataRes>('/auth/login', data)
  )
)

export const getCardsRoomsUserReq = (userId: number) => (
  getDataOfRequest(
    api.get<IcardRoom[]>(`/room/getUserRoomWRoleMessage/${userId}`)
  )
)
export const getSimilarRoomsReq = (nameRoom: string) => (
  getDataOfRequest(
    api.get<IcardRoom[]>(`/room/search?q=${nameRoom}`)
  )
)