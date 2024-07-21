'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { InfoIcon } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

type Inputs = {
  email: string
  password: string
}

export default function SignInForm() {
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
      <div className='grid'>
        <div className='grid gap-2'>
          <Label htmlFor='email'>Email</Label>
          <Input
            type='email'
            placeholder='john.doe@mail.com'
            className={cn({
              'ring-2 ring-red-500 focus-visible:ring-red-500': errors.password
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
          <div className='flex items-center'>
            <Label htmlFor='password'>Password</Label>
            <Link
              href='#'
              className='hidden ml-auto .inline-block text-sm underline'>
              Forgot your password?
            </Link>
          </div>
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
            Login
          </Button>
        ) : (
          <Button type='submit' className='w-full'>
            Login
          </Button>
        )}
      </div>
    </form>
  )
}
