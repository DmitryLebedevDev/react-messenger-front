import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { makeStyles, Button } from '@material-ui/core'

import { FormInputInitInFormikField } from './components/FormInput'
import { FormHeader } from './components/FormHeader'
import { commonAuthStyles } from './styles/common'

const useStyles = makeStyles({
  ...commonAuthStyles
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
                  variant:"outlined",
                  size:"small",
                  fullWidth:true,
                  autoComplete:"off",
                  label:"Email",
                })}
              </Field>
              <Field name="password">
                {FormInputInitInFormikField({
                  variant:"outlined",
                  size:"small",
                  fullWidth:true,
                  autoComplete:"off",
                  label:"Password"
                })}
              </Field>
            </div>
          </Form>
        )}
      </Formik>
      <Link to={'/quickRegistration'}>
        <Button style={{color: '#43a047'}}>
          Quick registration
        </Button>
      </Link>
      <Link to={'/registration'}>
        <Button color="primary">
          reg
        </Button>
      </Link>
    </>
  )
}
