import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { Button, makeStyles } from '@material-ui/core'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { commonAuthStyles } from './styles/common'
import { FormHeader } from './components/FormHeader'
import { useFormikInput } from './components/FormInput'
import { $registrationFxStatus, registrationFx } from '../../models/auth'
import { useStore } from 'effector-react'

const useStyles = makeStyles({
  ...commonAuthStyles,
  compareFields: {
    display: 'flex',
    '& div + div': {
      marginTop: '0px',
      marginLeft: '10px',
    }
  },
})

const textErrorRequiredField = 'required field'
const registrationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required(textErrorRequiredField),
  email: Yup.string()
    .email('incorrect email')
    .required(textErrorRequiredField),
  password: Yup.string()
    .min(8, 'Password is too short(min 8 chars)')
    .max(20, 'Password is too long(max 20 chars)')
    .required(textErrorRequiredField),
  repeatPassword: Yup.string()
    .test('match password', 'not match password', function(value) {
      return this.parent.password === value;
    })
    .required(textErrorRequiredField)
})

export const RegistrationPage:FunctionComponent = () => {
  const {pending, error} = useStore($registrationFxStatus)

  const registrationDataInit = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: ''
  }

  const handleSubmit = (
    data: typeof registrationDataInit,
  ) => {
    registrationFx({type: 'full', data})
  }
  const formik = useFormik({
    initialValues: registrationDataInit,
    validationSchema: registrationSchema,
    onSubmit: handleSubmit,
  });

  const createFormField = useFormikInput<
    keyof typeof registrationDataInit
  >(formik)

  const classes = useStyles()

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormHeader variant='registration'/>
      <div className={classes.formFields}>
        <div className={classes.compareFields}>
          {createFormField('firstName', {label: 'First name'})}
          {createFormField('lastName',  {label: 'Last name'})}
        </div>
        {createFormField('email', {label: 'Email'})}
        {createFormField('password', {label: 'Password', type: 'password'})}
        {createFormField(
          'repeatPassword', {
            label: 'Repeat password',
            type: 'password'
          }
        )}
      </div>
      <div className={classes.formButtons}>
        <Button variant='contained' color='primary' type="submit">
          Sign up
        </Button>
        <Link to={'/login'}>
          <Button color='primary'>
            Log in
          </Button>
        </Link>
      </div>
    </form>
  )
}
