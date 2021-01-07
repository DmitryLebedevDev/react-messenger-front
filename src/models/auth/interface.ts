export interface IquickRegistrationFxNextStep {
  userInfo: {
    email: string,
    password: string
  }
  next: () => void
}