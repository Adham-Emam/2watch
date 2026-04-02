'use client'

import { useMemo } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Button } from '@/components/ui/button'
import { FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field'

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .min(2, 'Too short')
    .max(50, 'Too long')
    .matches(/^[a-zA-Z]+$/, 'Only letters allowed')
    .required('First name is required'),

  lastName: Yup.string()
    .trim()
    .min(2, 'Too short')
    .max(50, 'Too long')
    .matches(/^[a-zA-Z]+$/, 'Only letters allowed')
    .required('Last name is required'),

  email: Yup.string()
    .trim()
    .lowercase()
    .email('Invalid email format')
    .required('Email is required'),

  password: Yup.string()
    .min(8, 'Minimum 8 characters')
    .max(50, 'Maximum 50 characters')
    .matches(/[a-z]/, 'Must contain a lowercase letter')
    .matches(/[A-Z]/, 'Must contain an uppercase letter')
    .matches(/\d/, 'Must contain a number')
    .matches(/[@$!%*?&]/, 'Must contain a special character')
    .required('Password is required'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm your password'),
})

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .lowercase()
    .email('Invalid email format')
    .required('Email is required'),

  password: Yup.string().required('Password is required'),
})

interface AuthFormProps {
  mode: 'login' | 'register'
}

export default function AuthForm({ mode }: AuthFormProps) {
  const initialValues = useMemo(() => {
    return mode === 'login'
      ? { email: '', password: '' }
      : {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }
  }, [mode])

  const schema = mode === 'login' ? LoginSchema : RegisterSchema

  const handleSubmit = (values: any) => {
    console.log(values)
  }

  const labelClasses = 'opacity-70 font-semibold mb-2'
  const fieldClasses =
    'w-full px-3 py-2 rounded-md glass-card bg-foreground/10! focus:outline-none focus:ring-none focus:border focus:border-primary!'

  return (
    <div className="w-full my-5">
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            <FieldSet>
              <FieldGroup>
                {mode === 'register' && (
                  <>
                    <div>
                      <FieldLabel className={labelClasses}>
                        First Name
                      </FieldLabel>
                      <Field name="firstName" className={fieldClasses} />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <FieldLabel className={labelClasses}>
                        Last Name
                      </FieldLabel>
                      <Field name="lastName" className={fieldClasses} />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </>
                )}

                <div>
                  <FieldLabel className={labelClasses}>Email</FieldLabel>
                  <Field name="email" type="email" className={fieldClasses} />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <FieldLabel className={labelClasses}>Password</FieldLabel>
                  <Field
                    name="password"
                    type="password"
                    className={fieldClasses}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {mode === 'register' && (
                  <div>
                    <FieldLabel className={labelClasses}>
                      Confirm Password
                    </FieldLabel>
                    <Field
                      name="confirmPassword"
                      type="password"
                      className={fieldClasses}
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                )}
              </FieldGroup>
            </FieldSet>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {mode === 'login' ? 'Login' : 'Create Account'}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
