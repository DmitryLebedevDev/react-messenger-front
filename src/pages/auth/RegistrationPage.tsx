import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { Button, makeStyles } from '@material-ui/core'
import { Field, Form, Formik } from 'formik'

import { commonAuthStyles } from './styles/common'
import { FormHeader } from './components/FormHeader'
import { FormInputInitInFormikField } from './components/FormInput'

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
            <div className={classes.compareFields}>
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
            </div>
            
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
      <div className={classes.formButtons}>
        <Link to={'/login'}>
          <Button variant="contained" color="primary">
            Sign up
          </Button>
        </Link>
      </div>
    </>
  )
}
