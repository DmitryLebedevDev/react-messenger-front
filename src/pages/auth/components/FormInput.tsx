import React from 'react'
import { FieldProps, FieldMetaProps } from 'formik'
import { TextField, TextFieldProps } from '@material-ui/core'

interface Iprops {
  field: FieldProps,
  meta: FieldMetaProps<string>,
  componentProps: TextFieldProps
}

export const FormInputInitInFormikField = (props: TextFieldProps) => {
  const defaultInputProps: TextFieldProps = {
    variant:"outlined",
    size:"small",
    fullWidth:true,
    autoComplete:"off",
  }

  return (params: Omit<Iprops, "componentProps">) => (
    <FormInput 
      componentProps={{...defaultInputProps, ...props}} 
      {...params}
    />
  )
}

export const FormInput = ({field, componentProps = {}}: Iprops) => {
  return (
    <TextField {...componentProps} {...field}/>
  )
}
