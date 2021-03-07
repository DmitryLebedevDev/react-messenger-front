import React, { FunctionComponent } from 'react'
import { useStore } from 'effector-react'
import { CircularProgress } from '@material-ui/core'

import { $currentRoomsInfo } from '../../../models/rooms'
import { RoomsListCard } from './RoomsListCard'

const RoomsListBodyFC:FunctionComponent = () => {
  const {pending, rooms} = useStore($currentRoomsInfo)

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