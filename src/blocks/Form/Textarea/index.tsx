import type { TextField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { Label } from '@/components/ui/label'
import { Textarea as TextAreaComponent } from '@/components/ui/textarea'
import React from 'react'

import { Error } from '../Error'
import { Width } from '../Width'

export const Textarea: React.FC<
  TextField & {
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any
      }>
    >
    register: UseFormRegister<FieldValues>
    rows?: number
  }
> = ({
  name,
  defaultValue,
  errors,
  label,
  register,
  required: requiredFromProps,
  rows = 5,
  width,
}) => {
  return (
    <Width width={width}>
      <Label htmlFor={name} className="my-2 mt-3 text-jet block">
        {label}*
      </Label>
      <TextAreaComponent
        className="text-jet/60 bg-textblue/40 border-2 border-none ring-0 focus:ring-0 focus:border-none py-3 text-md focus:outline-none drop-shadow-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        placeholder={defaultValue}
        id={name}
        rows={rows}
        {...register(name, { required: requiredFromProps })}
      />

      {requiredFromProps && errors[name] && <Error />}
    </Width>
  )
}
