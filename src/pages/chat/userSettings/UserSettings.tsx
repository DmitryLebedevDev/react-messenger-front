import React, { FunctionComponent } from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  wrapSettings: {

  }
})

export const UserSettings:FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapSettings}>
      settings
    </div>
  )
}
