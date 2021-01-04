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
      <FormHeader variant='quickRegistrationPage'/>
      <div className={classes.formFields}>
        quickRegistrationPage
      </div>
      <div className={classes.formButtons}>
        <Button
          variant='contained'
          color='primary'
          type="submit"
        >
          Sign up
        </Button>
        <Link to={'/login'}>
          <Button color='primary'>
            Log in
          </Button>
        </Link>
      </div>
    </>
  )
}
