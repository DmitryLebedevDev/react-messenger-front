import React, { FC } from 'react'
import { CircularProgress } from '@material-ui/core'

import { RoomsListCard } from './RoomsListCard'
import { IcardRoom } from '../../../models/rooms/intarface'

interface Iprops {
  pending: boolean,
  rooms: IcardRoom[]
}

const RoomsListBodyFC:FC<Iprops> = (props) => {
  const {pending, rooms} = props

  return <div>{
    pending ?
      <CircularProgress />
      :
      Object
        .values(rooms)
        .map(cardRoom => <RoomsListCard key={cardRoom.id} {...cardRoom}/>)
  }</div>
}

export const RoomsListBody = React.memo(RoomsListBodyFC)