import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { Button, makeStyles } from '@material-ui/core'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup';

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

const textErrorRequiredField = 'required field';
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
        validationSchema={registrationSchema}
        onSubmit={() => {}}
      >
        <Form>
          <FormHeader variant='registration'/>
          <div className={classes.formFields}>
            <div className={classes.compareFields}>
              <Field name='firstName'>
                {FormInputInitInFormikField({
                  label:'First name'
                })}
              </Field>
              <Field name='lastName'>
                {FormInputInitInFormikField({
                  label:'Last name'
                })}
              </Field>
            </div>
            <Field name='email'>
              {FormInputInitInFormikField({
                label:'Email'
              })}
            </Field>
            <Field name='password'>
              {FormInputInitInFormikField({
                label:'Password',
                type: 'password'
              })}
            </Field>
            <Field name='repeatPassword'>
              {FormInputInitInFormikField({
                label:'Repeat password',
                type: 'password'
              })}
            </Field>
          </div>
        </Form>
      </Formik>
      <div className={classes.formButtons}>
        <Button variant='contained' color='primary'>
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
