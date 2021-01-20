import React, { FunctionComponent } from 'react'
import { makeStyles } from '@material-ui/core'
import cn from 'classnames'

import { $quickRegistrationFxStatus } from '../../../models/auth'
import { useStore } from 'effector-react'
import { QuickRegistrationForm } from './QuickRegistrationForm'
import { QuickRegistrationData } from './QuickRegistrationData'

const useStyles = makeStyles({
  QuickRegistration: {
  },
  content: {
    display: 'flex',
    transition: '.2s',
    '& > *': {
      width: '100%',
      flexShrink: 0,
    },
    '& > * + *': {
      marginLeft: 15
    }
  },
  nextStep: {
    transform: 'translateX(calc(-100% + -15px))',
  }
})

export const QuickRegistrationPage:FunctionComponent = () => {
  const { pending, error, data } = useStore($quickRegistrationFxStatus)
  console.log(data)
  const classes = useStyles()

  return (
    <div className={classes.QuickRegistration}>
      <div
        className={cn([
          classes.content,
          data && classes.nextStep
        ])}
      >
        <QuickRegistrationForm
          pending={pending}
          error={error}
        />
        {data &&
         <QuickRegistrationData
            userData={data.userInfo}
            next={data.next}
          />
        }
      </div>
    </div>
  )
}
