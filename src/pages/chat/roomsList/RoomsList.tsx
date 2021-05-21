import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core'
import { useStore } from 'effector-react'

import { RoomsListHeader } from './RoomsListHeader'
import { RoomsListBody } from './RoomsListBody'
import {
  $currentRoomsInfo,
  activeSearchRoomsEvent,
  activeUserRoomsEvent
} from '../../../models/rooms'
import { useDebounceFn } from '../../../common/hooks/useDebounce'
import { getCardsRoomsSFx } from '../../../models/rooms'

const useStyles = makeStyles({
  roomList: {
    borderRight: '1px solid var(--border)',
    '@media (max-width: 768px)': {
      borderRight: 'none',
    }
  }
})

interface Iprops {
  openMenuFn: () => void,
}

const RoomsListFC:FC<Iprops> = ({
  openMenuFn
}) => {
  const { pending, rooms } = useStore($currentRoomsInfo)

  const handleStartSearch = activeSearchRoomsEvent
  const handleRoomSearch  = useDebounceFn(
    getCardsRoomsSFx, 500
  )
  const handleEndSearch = activeUserRoomsEvent

  const classes = useStyles()

  return (
    <div className={classes.roomList}>
      <RoomsListHeader
        openMenuFn={openMenuFn}
        startSearch={handleStartSearch}
        changeSearch={handleRoomSearch}
        endSearch={handleEndSearch}
      />
      <RoomsListBody
        pending={pending}
        rooms={Object.values(rooms)}
      />
    </div>
  )
}

export const RoomsList = React.memo(RoomsListFC)