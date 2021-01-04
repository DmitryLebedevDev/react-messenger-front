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
    variant:'outlined',
    size:'small',
    fullWidth:true,
    autoComplete:'off',
  }

  return (params: Omit<Iprops, 'componentProps'>) => (
    <FormInput
      componentProps={{...defaultInputProps, ...props}}
      {...params}
    />
  )
}

export const FormInput = ({
  field, meta, componentProps = {}, ...allProps}: Iprops
) => {
  const isError = Boolean(meta.error && meta.touched);
  return (
    <TextField
      {...componentProps}
      {...field}
      error={isError}
      helperText={isError ?
        meta.error : componentProps.helperText
      }
    />
  )
}
