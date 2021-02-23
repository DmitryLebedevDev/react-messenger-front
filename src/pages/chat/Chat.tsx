import { makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { RoomList } from './roomsList/RoomList'
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
  const [isOpenSettings, setIsOpenSettings] = useState(true);

  const classes = useStyles();

  return (
    <div className={classes.chat}>
      <UserSettings
        isOpenSettings={isOpenSettings}
        openFn={() => setIsOpenSettings(true)}
        closeFn={() => setIsOpenSettings(false)}
      />
      <RoomList
        openSettingsFn={() => setIsOpenSettings(true)}
      />
    </div>
  )
}
