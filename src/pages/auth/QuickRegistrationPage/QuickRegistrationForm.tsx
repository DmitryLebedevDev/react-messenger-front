import React, { FC } from 'react'
import { Button, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'

import { commonAuthStyles } from '../styles/common'
import { FormHeader } from '../components/FormHeader'
import { useFormik } from 'formik'
import { useFormikInput } from '../components/FormInput'
import { IquickRegistrationDataReq, IReqError } from '../../../api/api.interface'
import { quickRegistrationFx } from '../../../models/auth'

interface Iprops {
  pending: boolean,
  error: IReqError | null
}

const textErrorRequiredField = 'required field'
const quickRegistrationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required(textErrorRequiredField),
  lastName: Yup.string()
    .required(textErrorRequiredField)
})

const useStyles = makeStyles({
  ...commonAuthStyles
})

export const QuickRegistrationForm:FC<Iprops> = (
  {pending, error}
) => {
  const quickRegistrationDataInit: IquickRegistrationDataReq = {
    firstName: '',
    lastName: ''
  }

  const formik = useFormik({
    initialValues: quickRegistrationDataInit,
    validationSchema: quickRegistrationSchema,
    onSubmit: quickRegistrationFx,
  });

  const createFormField = useFormikInput<
    keyof typeof quickRegistrationDataInit
  >(formik)

  const classes = useStyles()

  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <FormHeader pending={pending} variant='quickRegistrationPage'/>
      <div className={classes.formFields}>
        {createFormField('firstName', {label: 'FirstName'})}
        {createFormField('lastName', {label: 'LastName'})}
      </div>
      { error &&
        <div className={classes.formError}>
          {error.message}
        </div>
      }
      <div className={classes.formButtons}>
        <Button
          variant='contained'
          color='primary'
          type='submit'
        >
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