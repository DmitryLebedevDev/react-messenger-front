import React, { FunctionComponent } from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  wrapSettings: {
    zIndex: 2,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '320px',
    height: '100vh',
    background: 'var(--background)',
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
  const classes = useStyles();

  return (
    <>
      <div className={classes.wrapSettings}>settings</div>
      <div className={classes.shadow}>1</div>
    </>
  )
}
