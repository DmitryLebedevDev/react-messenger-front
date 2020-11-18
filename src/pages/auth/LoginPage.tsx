import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'

import {FormInputInitInFormikField} from './components/FormInput'
import { FormHeader } from './components/FormHeader'

export const LoginPage:FunctionComponent = () => {
  return (
    <>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={(e) => {console.log(e)}}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormHeader variant="login"/>
            <Field name="email">
              {FormInputInitInFormikField({
                variant:"outlined",
                size:"small",
                fullWidth:true,
                autoComplete:"off",
                label:"Email"
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
          </Form>
        )}
      </Formik>
      <Link to={'/registration'}>
        reg
      </Link>
    </>
  )
}
