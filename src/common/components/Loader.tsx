import React from 'react'
import { CircularProgress, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  wrap: {
    position: 'absolute',
    left: 0,
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
  }
})


export const Loader:React.FunctionComponent = () => {
  const classes = useStyles()

  return <div className={classes.wrap}>
    <CircularProgress />
  </div>
}