import React from 'react'
import { makeStyles } from '@material-ui/core'

import { Input } from '../../../common/components/input'

const useStyles = makeStyles({
  roomListHeader: {
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: '60px 1fr',
    height: 66,
    border: '1px solid red',
  },
  search: {
    paddingRight: 15,
  },
  searchInput: {
    width: '100%',
  }
})

export const RoomListHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.roomListHeader}>
      <div></div>
      <div className={classes.search}>
        <Input className={classes.searchInput}/>
      </div>
    </div>
  )
}
