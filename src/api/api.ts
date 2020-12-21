import axios, { AxiosResponse } from 'axios'
import { env } from 'process'
import { Iuser } from '../models/user/interface'
import { IquickRegistrationData } from './api.interface'

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

export const authUser = () => getDataOfRequest(api.get<Iuser>('auth')) 

export const quickRegistration = (data: IquickRegistrationData) => {

}