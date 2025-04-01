import type { TextField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

import { Error } from '../Error'
import { Width } from '../Width'
export const Number: React.FC<
  TextField & {
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any
      }>
    >
    register: UseFormRegister<FieldValues>
  }
> = ({ name, defaultValue, errors, label, register, required: requiredFromProps, width }) => {
  return (
    <Width width={width}>
      <Label htmlFor={name} className="my-2 mt-3 text-jet block">
        {label}*
      </Label>
      <Input
        className="text-jet/60 bg-textblue/40 border-2 border-none ring-0 focus:ring-0 focus:border-none py-6 text-md focus:outline-none drop-shadow-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        placeholder={label}
        id={name}
        type="tel"
        {...register(name, { required: requiredFromProps })}
      />
      {requiredFromProps && errors[name] && <Error />}
    </Width>
  )
}
