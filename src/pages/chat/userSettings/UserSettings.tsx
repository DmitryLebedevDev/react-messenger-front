import React, { FunctionComponent } from 'react'
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
    zIndex: -1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: '#7c7c7c00',
    transition: '.2s',
  },
  shadowWiew: {
    zIndex: 1,
    background: '#7c7c7c75',
  }
})

interface Iprops {
  isOpenSettings: boolean,
  openFn: () => void,
  closeFn: () => void,
}

export const UserSettings:FunctionComponent<Iprops> = ({
  isOpenSettings, openFn, closeFn
}) => {
  const classes = useStyles()

  return (
    <>
      <div className={cn(
          classes.settings,
        {[classes.settingsOpen]: isOpenSettings}
        )}
        onClick={openFn}
      >
        settings
      </div>
      <div className={cn(
          classes.shadow,
        {[classes.shadowWiew]: isOpenSettings}
        )}
        onClick={closeFn}
      ></div>
    </>
  )
}
