import React, { FunctionComponent, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import cn from 'classnames'

const useStyles = makeStyles({
  settings: {
    zIndex: 2,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '320px',
    height: '100vh',
    background: 'var(--background)',
    transform: 'translateX(-100%)',
    transition: '.2s',
  },
  settingsOpen: {
    transform: 'translateX(0px)'
  },
  shadow: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    width: '100vw',
    height: '100vh',
    background: '#7c7c7c75'
  }
})

export const UserSettings:FunctionComponent = () => {
  const [isOpenSettings, setIsOpenSettings] = useState(false);

  const classes = useStyles()

  useEffect(
    () => {setInterval(() => setIsOpenSettings(i => !i),1000)},
    []
  )

  return (
    <>
      <div className={cn(
          classes.settings,
        {[classes.settingsOpen]: isOpenSettings}
        )}
      >
        settings
      </div>
      <div className={classes.shadow}></div>
    </>
  )
}
