import React from 'react'
import { TextField, TextFieldProps } from '@material-ui/core'

export function useFormikInput<fieldsName extends string>(
  //not support return type of generic fn(ReturnType<typeof useFormik<FieldNames>>)
  formik: any
) {
  return (
    name: fieldsName,
    componentProps: TextFieldProps = {}
  ) => {
    const defaultInputProps: TextFieldProps = {
      variant:'outlined',
      size:'small',
      fullWidth:true,
      autoComplete:'off',
    }

    const isError = Boolean(formik.touched[name] &&
                            formik.errors[name])

    return (
      <TextField
        {...defaultInputProps}
        {...componentProps}
        name={name}
        error={isError}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values[name]}
        helperText={isError ?
          formik.errors[name] : componentProps.helperText
        }
      />
    )
  }
}