export enum roomsStatus {
  userRoom,
  searchRoom
}

export interface IcardRoom {
  id: number,
  name: string,
  role: Irole,
  messages: Imessage[],
  createrId: number,
  avatarId: string | null
}
export interface IcardsRoomsStore {
  [index: number]: IcardRoom
}

export interface Imessage {
  id: number,
  text: string,
  user: number,
  room: number
}

export interface Irole {
  id: number,
  name: string,
  isDeleteUsersMesseges: boolean,
  isDeleteYourMesseges: boolean,
  isBannedUsers: boolean,
  isMuteUsers: boolean,
  isSendMessage: boolean
}