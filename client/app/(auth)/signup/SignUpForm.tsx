'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'
import { InfoIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type Inputs = {
  firstName: string
  lastName: string
  email: string
  password: string
}

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()

  const onSubmit = handleSubmit((data) => {
    console.log('Creando usuario...')
    console.log(data)
  })

  return (
    <form onSubmit={onSubmit}>
      <div className='grid w-full'>
        <div className='grid gap-2'>
          <Label htmlFor='firstName'>First name</Label>
          <Input
            type='text'
            placeholder='John'
            className={cn({
              'ring-2 ring-red-500 focus-visible:ring-red-500': errors.firstName
            })}
            {...register('firstName', {
              required: {
                value: true,
                message: 'El campo es requerido'
              }
            })}
          />
          <span
            className={cn(
              'invisible inline-flex items-center gap-1 text-xs text-red-500 -mt-1 mb-2',
              {
                visible: errors.firstName
              }
            )}>
            <InfoIcon className='size-[12px]' />
            El campo es requerido
          </span>
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='lastName'>Last name</Label>
          <Input
            type='text'
            placeholder='Doe'
            className={cn({
              'ring-2 ring-red-500 focus-visible:ring-red-500': errors.lastName
            })}
            {...register('lastName', {
              required: {
                value: true,
                message: 'El campo es requerido'
              }
            })}
          />
          <span
            className={cn(
              'invisible inline-flex items-center gap-1 text-xs text-red-500 -mt-1 mb-2',
              {
                visible: errors.lastName
              }
            )}>
            <InfoIcon className='size-[12px]' />
            El campo es requerido
          </span>
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='email'>Email</Label>
          <Input
            type='email'
            placeholder='john.doe@email.com'
            className={cn({
              'ring-2 ring-red-500 focus-visible:ring-red-500': errors.email
            })}
            {...register('email', {
              required: {
                value: true,
                message: 'El campo es requerido'
              }
            })}
          />
          <span
            className={cn(
              'invisible inline-flex items-center gap-1 text-xs text-red-500 -mt-1 mb-2',
              {
                visible: errors.email
              }
            )}>
            <InfoIcon className='size-[12px]' />
            El campo es requerido
          </span>
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='password'>Password</Label>
          <Input
            type='password'
            placeholder='*********'
            className={cn({
              'ring-2 ring-red-500 focus-visible:ring-red-500': errors.password
            })}
            {...register('password', {
              required: {
                value: true,
                message: 'El campo es requerido'
              }
            })}
          />
          <span
            className={cn(
              'invisible inline-flex items-center gap-1 text-xs text-red-500 -mt-1 mb-2',
              {
                visible: errors.password
              }
            )}>
            <InfoIcon className='size-[12px]' />
            El campo es requerido
          </span>
        </div>

        {Object.entries(errors).length ? (
          <Button type='submit' className='w-full' disabled>
            Create an account
          </Button>
        ) : (
          <Button type='submit' className='w-full'>
            Create an account
          </Button>
        )}
      </div>
    </form>
  )
}
