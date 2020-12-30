import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import { Field, Form, Formik } from 'formik'

import { commonAuthStyles } from './styles/common'
import { FormHeader } from './components/FormHeader'
import { FormInputInitInFormikField } from './components/FormInput'

const useStyles = makeStyles({
  ...commonAuthStyles
})

export const RegistrationPage:FunctionComponent = () => {
  const registrationDataInit = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: ''
  }
  const classes = useStyles();

  return (
    <>
      <Formik 
        initialValues={registrationDataInit} 
        onSubmit={() => {}}
      >
        <Form>
          <FormHeader variant="registration"/>
          <div className={classes.formFields}>
            <Field name="firstName">
              {FormInputInitInFormikField({
                label:"First name"
              })}
            </Field>
            <Field name="lastName">
              {FormInputInitInFormikField({
                label:"Last name"
              })}
            </Field>
            <Field name="email">
              {FormInputInitInFormikField({
                label:"Email"
              })}
            </Field>
            <Field name="password">
              {FormInputInitInFormikField({
                label:"Password"
              })}
            </Field>
            <Field name="repeatPassword">
              {FormInputInitInFormikField({
                label:"Repeat password"
              })}
            </Field>
          </div>
        </Form>
      </Formik>
      <Link to={'/login'}>
        login
      </Link>
    </>
  )
}
