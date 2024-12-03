import { UseFormGetValues, type RegisterOptions } from 'react-hook-form'
import { FormData } from '../types/utils.type'
import * as yup from 'yup'

// Type - 1
type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }

export const getRules = (getValues?: UseFormGetValues<FormData>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Email là bắt buộc'
    },
    pattern: {
      value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      message: 'Email phải đúng định dạng'
    },
    maxLength: {
      value: 160,
      message: 'Email không quá 50 ký tự'
    },
    minLength: {
      value: 5,
      message: 'Email phải có ít nhất 5 ký tự'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password là bắt buộc'
    },
    maxLength: {
      value: 160,
      message: 'Password không quá 50 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Password phải có ít nhất 5 ký tự'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Confirm password là bắt buộc'
    },
    maxLength: {
      value: 160,
      message: 'Password không quá 50 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Password phải có ít nhất 5 ký tự'
    },
    validate:
      typeof getValues === 'function'
        ? (value) => value === getValues('password') || 'Confirm Password không khớp'
        : undefined
  }
})

// Type - 2
export const schema = yup.object({
  email: yup
    .string()
    .required('Email là bắt buộc')
    .min(6, 'Email phải có ít nhất 6 ký tự')
    .max(160, 'Email không quá 160 ký tự'),
  password: yup
    .string()
    .required('Password là bắt buộc')
    .min(6, 'Password phải có ít nhất 6 ký tự')
    .max(160, 'Passwords không quá 160 ký tự'),
  confirm_password: yup
    .string()
    .required('Confirm password là bắt buộc')
    .min(6, 'Confirm password phải có ít nhất 6 ký tự')
    .max(160, 'Confirm password  không quá 160 ký tự')
    .oneOf([yup.ref('password')], 'Nhập lại password không khớp!')
})

// Constants
export const loginSchema = schema.omit(['confirm_password'])
export const registerSchema = schema.pick(['email', 'password', 'confirm_password'])
//Type
export type LoginSchema = yup.InferType<typeof loginSchema>
export type RegisterSchema = yup.InferType<typeof schema>
