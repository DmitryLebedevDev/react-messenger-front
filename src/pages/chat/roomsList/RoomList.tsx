import React, { FunctionComponent } from 'react'
import { makeStyles } from '@material-ui/core'

import { RoomListHeader } from './RoomListHeader'

const useStyles = makeStyles({
  roomList: {
    borderRight: '1px solid var(--border)',
    '@media (max-width: 768px)': {
      borderRight: 'none',
    }
  }
})

interface Iprops {
  openSettingsFn: () => void,
}

const RoomListFC:FunctionComponent<Iprops> = ({
  openSettingsFn
}) => {
  const classes = useStyles();

  return (
    <div className={classes.roomList}>
      <RoomListHeader openSettingsFn={openSettingsFn}/>
    </div>
  )
}

export const RoomList = React.memo(RoomListFC);