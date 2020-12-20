import axios from 'axios'
import { env } from 'process'
import { IquickRegistrationData } from './api.interface'

const api = axios.create({
  baseURL: env.REACT_APP_BASE_URL
})

export const quickRegistration = (data: IquickRegistrationData) => {

}