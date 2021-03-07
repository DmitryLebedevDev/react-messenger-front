import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { RoomsList } from './roomsList/RoomsList'
import { UserSettings } from './userSettings/UserSettings'

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

export const Chat = () => {
  const [isOpenSettings, setIsOpenSettings] = useState(false);

  const classes = useStyles();

  return (
    <div className={classes.chat}>
      <UserSettings
        isOpenSettings={isOpenSettings}
        closeFn={() => setIsOpenSettings(false)}
      />
      <RoomsList
        openSettingsFn={() => setIsOpenSettings(true)}
      />
    </div>
  )
}
