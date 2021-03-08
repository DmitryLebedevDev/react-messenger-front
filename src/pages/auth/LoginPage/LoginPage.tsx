import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { makeStyles, Button } from '@material-ui/core'
import * as Yup from 'yup'

import { useFormikInput } from '../components/FormInput'
import { FormHeader } from '../components/FormHeader'
import { commonAuthStyles } from '../styles/common'
import { loginFx, loginFxStatus } from '../../../models/auth'
import { useStore } from 'effector-react'

const useStyles = makeStyles({
  ...commonAuthStyles
})

const textErrorRequiredField = 'required field'
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('incorrect email')
    .required(textErrorRequiredField),
  password: Yup.string()
    .min(8, 'Password is too short(min 8 chars)')
    .max(20, 'Password is too long(max 20 chars)')
    .required(textErrorRequiredField),
})

export const LoginPage:FC = () => {
  const { pending, error } = useStore(loginFxStatus)

  const loginDataInit = {email: '', password: ''}

  const formik = useFormik({
    initialValues: loginDataInit,
    validationSchema: loginSchema,
    onSubmit: loginFx,
  });

  const createFormField = useFormikInput<
    keyof typeof loginDataInit
  >(formik)

  const classes = useStyles()

  return (
    <form className={classes.form} onSubmit={formik.handleSubmit}>
      <FormHeader pending={pending} variant="login"/>
      <div className={classes.formFields}>
        {createFormField('email', {label: 'Email'})}
        {createFormField('password', {
          label: 'Password', type: 'password'
        })}
      </div>
      {error && (error.status === 404 || error.status === 0) &&
        <div className={classes.formError}>{error.message}</div>
      }
      {error && error.status === 401 &&
        <div className={classes.formError}>incorrect login or email</div>
      }
      <div className={classes.formButtons}>
        <Button variant='contained' color='primary' type="submit">
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
