import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { makeStyles, Button } from '@material-ui/core'

import { useFormikInput } from './components/FormInput'
import { FormHeader } from './components/FormHeader'
import { commonAuthStyles } from './styles/common'

const useStyles = makeStyles({
  ...commonAuthStyles,
  greenButton: {
    background:'#43a047',
    color: 'white',
    '&:hover': {
      background: '#419145'
    }
  }
})

export const LoginPage:FunctionComponent = () => {
  const loginDataInit = {email: '', password: ''}

  const formik = useFormik({
    initialValues: loginDataInit,
    onSubmit: () => {},
  });

  const createFormField = useFormikInput<
    keyof typeof loginDataInit
  >(formik)

  const classes = useStyles()

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormHeader variant="login"/>
      <div className={classes.formFields}>
        {createFormField('email', {label: 'Email'})}
        {createFormField('password', {
          label: 'Password', type: 'password'
        })}
      </div>
      <div className={classes.formButtons}>
        <Button variant='contained' color='primary'>
          Log in
        </Button>
        <Link to={'/quickRegistration'}>
          <Button className={classes.greenButton} variant='contained'>
            Quick registration
          </Button>
        </Link>
        <Link to={'/registration'}>
          <Button color="primary">
            registration
          </Button>
        </Link>
      </div>
    </form>
  )
}
