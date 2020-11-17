import React from 'react'
import { FieldProps, FieldMetaProps } from 'formik'
import { TextField, TextFieldProps } from '@material-ui/core'

interface Iprops {
  field: FieldProps,
  meta: FieldMetaProps<string>,
  componentProps: TextFieldProps
}

export const FormInputInitInFormikField = (props: TextFieldProps) => {
  return (params: Omit<Iprops, "componentProps">) => (
    <FormInput componentProps={props} {...params}/>
  )
}

export const FormInput = ({field, meta, componentProps = {}}: Iprops) => {
  return (
    <TextField {...componentProps} {...field}/>
  )
}
