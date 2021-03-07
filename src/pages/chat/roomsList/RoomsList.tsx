import React, { FunctionComponent } from 'react'
import { makeStyles } from '@material-ui/core'

import { RoomsListHeader } from './RoomsListHeader'
import { RoomsListBody } from './RoomsListBody'

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

const RoomsListFC:FunctionComponent<Iprops> = ({
  openSettingsFn
}) => {
  const classes = useStyles();

  return (
    <div className={classes.roomList}>
      <RoomsListHeader openSettingsFn={openSettingsFn}/>
      <RoomsListBody/>
    </div>
  )
}

export const RoomsList = React.memo(RoomsListFC);