import { makeStyles } from '@material-ui/core'
import React from 'react'
import { RoomList } from './roomsList/RoomList'

const useStyles = makeStyles({
  chat: {
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: '320px 1fr',
  }
})

export const Chat = () => {
  const classes = useStyles();

  return (
    <div className={classes.chat}>
      <RoomList/>
    </div>
  )
}
