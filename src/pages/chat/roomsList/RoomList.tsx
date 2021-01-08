import React from 'react'
import { makeStyles } from '@material-ui/core'

import { RoomListHeader } from './RoomListHeader';

const useStyles = makeStyles({
  roomList: {
    borderRight: '1px solid var(--border)'
  }
})

export const RoomList = () => {
  const classes = useStyles();

  return (
    <div className={classes.roomList}>
      <RoomListHeader/>
    </div>
  )
}
