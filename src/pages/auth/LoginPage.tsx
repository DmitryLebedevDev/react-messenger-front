import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { makeStyles, Button } from '@material-ui/core'

import { FormInputInitInFormikField } from './components/FormInput'
import { FormHeader } from './components/FormHeader'
import { commonAuthStyles } from './styles/common'

const useStyles = makeStyles({
  ...commonAuthStyles,
  greenButton: {
    background:'#43a047',
    color: 'white'
  }
})

export const LoginPage:FunctionComponent = () => {
  const classes = useStyles();

  return (
    <>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={(e) => {console.log(e)}}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormHeader variant="login"/>
            <div className={classes.formFields}>
              <Field name="email">
                {FormInputInitInFormikField({
                  label:"Email",
                })}
              </Field>
              <Field name="password">
                {FormInputInitInFormikField({
                  label:"Password"
                })}
              </Field>
            </div>
          </Form>
        )}
      </Formik>
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
    </>
  )
}
