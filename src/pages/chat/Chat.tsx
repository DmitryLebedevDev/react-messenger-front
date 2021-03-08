import React, { FC, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { RoomsList } from './roomsList/RoomsList'
import { UsersMenu } from './userMenu/UserMenu'

const useStyles = makeStyles({
  chat: {
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: '320px 1fr',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '100vw 100vw',
    }
  }
})

export const Chat:FC = () => {
  const [isOpenUserMenu, setIsOpenUserMenu] = useState(false);

  const classes = useStyles();

  return (
    <div className={classes.chat}>
      <UsersMenu
        isOpen={isOpenUserMenu}
        closeMenuFn={() => setIsOpenUserMenu(false)}
      />
      <RoomsList
        openMenuFn={() => setIsOpenUserMenu(true)}
      />
    </div>
  )
}
