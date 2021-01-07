export interface IloginDataReq {
  email: string,
  password: string
}
export interface IloginDataRes {
  access_token: string
}
export interface IquickRegistrationDataReq {
  firstName: string,
  lastName: string
}
export interface IquickRegistrationDataRes
       extends   IregistrationDataRes {
  password: string
}
export interface IregistrationDataReq {
  firstName: string,
  lastName: string,
  email: string,
  password: string
}
export interface IregistrationDataRes {
  id: number
  firstName: string,
  lastName: string,
  email: string,
  avatarId: string | null,
  access_token: string
}
export interface IReqError {
  status: number,
  message: string
}