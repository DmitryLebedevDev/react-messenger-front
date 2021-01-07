import React, { useState } from 'react'
import { Button, makeStyles } from '@material-ui/core'
import cn from 'classnames'

import { commonAuthStyles } from '../styles/common'
import { copyText } from '../../../common/functions/copy'

interface Iprops {
  userData: {
    email: string,
    password: string
  },
  next: () => void
}

const useStyles = makeStyles({
  ...commonAuthStyles,
  userDataWrap: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column'
  },
  userData: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  }
})

export const QuickRegistrationData: React.FunctionComponent<Iprops>
= (props) => {
  const [isSavedData, setIsSavedData] = useState(false);
  const saveDataFn = () => {
    copyText(
    `email: ${props.userData.email}` + ' \n' +
    `password: ${props.userData.password}`
    )
    setIsSavedData(true);
  }

  const classes = useStyles();

  return (
    <div className={cn(classes.form, classes.userDataWrap)}>
      <div className={classes.userData}>
        <span>email: {props.userData.email}</span>
        <span>password: {props.userData.password}</span>
      </div>
      <div className={classes.formButtons}>
        <Button
          onClick={saveDataFn}
          disabled={isSavedData}
          className={classes.greenButton}
          variant='contained'
        >
          {isSavedData ?
           'your data saved in buffer'
           :
           'save your data in buffer'
          }
        </Button>
        <Button
          onClick={props.next}
          variant='contained'
          color='primary'
        >
          next
        </Button>
      </div>
    </div>
  )
}
