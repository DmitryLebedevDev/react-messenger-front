import React, { FC } from 'react'
import { IconButton, makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import { SearchInput } from './components/SearchInput'

const useStyles = makeStyles({
  roomListHeader: {
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: '60px 1fr',
    height: 66,
  },
  menu: {
    justifySelf: 'center',
    '& svg': {
      fontSize: 25,
      color: 'var(--icon)',
    },
    '&:hover svg': {
      color: 'var(--icon-active)'
    }
  },
  search: {
    paddingRight: 15,
  },
  searchInput: {
    width: '100%',
  }
})

interface Iprops {
  openMenuFn: () => void,
}

export const RoomsListHeader:FC<Iprops> = ({
  openMenuFn
}) => {
  const classes = useStyles()

  return (
    <div className={classes.roomListHeader}>
      <div className={classes.menu}>
        <IconButton onClick={openMenuFn}>
          <MenuIcon />
        </IconButton>
      </div>
      <div className={classes.search}>
        <SearchInput className={classes.searchInput}/>
      </div>
    </div>
  )
}
