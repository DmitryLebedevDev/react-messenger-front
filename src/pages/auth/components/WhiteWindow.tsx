import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  whiteWindow: {
    margin: '0px 10px',
    width: '100%',
    maxWidth: 500,
    minWidth: 300,
    padding: '10px',
    backgroundColor: 'white',
    borderRadius: 3,
    overflow: 'hidden'
  }
})

export const WhiteWindow:FC = ({children}) => {

  const classes = useStyles()

  return (
    <div className={classes.whiteWindow}>
      {children}
    </div>
  )
}
