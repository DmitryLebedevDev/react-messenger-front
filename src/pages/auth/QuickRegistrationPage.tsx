import React, { FunctionComponent } from 'react'
import { Button, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

import { commonAuthStyles } from './styles/common'
import { FormHeader } from './components/FormHeader'

const useStyles = makeStyles({
  ...commonAuthStyles
})

export const QuickRegistrationPage:FunctionComponent = () => {
  const classes = useStyles()

  return (
    <>
      <FormHeader variant="quickRegistrationPage"/>
      <div className={classes.formFields}>
        quickRegistrationPage
      </div>
      <div className={classes.formButtons}>
        <Link to={'/login'}>
          <Button variant='contained' color='primary'>
            Sign up
          </Button>
        </Link>
      </div>
    </>
  )
}
