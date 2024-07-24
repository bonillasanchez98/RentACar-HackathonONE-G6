'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInSchema } from '@/lib/zod'
import { signIn, getSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { toast, Toaster } from 'sonner'

export default function FormSignIn() {
  const route = useRouter()

  const promise = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve({ name: 'Sonner' }), 1000)
    })

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  })

  async function onSubmit(values: z.infer<typeof signInSchema>) {
    const response = await signIn('credentials', {
      username: values.username,
      password: values.password,
      redirect: false
    })

    if (response?.error) {
      return toast.error('Credenciales incorrectas', {
        description: 'Intente de nuevo'
      })
    }

    const session = await getSession()

    if (session?.user.role === 'ADMIN') route.push('/admin')
    if (session?.user.role === 'CUSTOMER') route.push('/dashboard')

    return route.refresh()
  }

  return (
    <>
      <Toaster position='top-center' richColors />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='space-y-4'>
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre de usuario</FormLabel>
                  <FormControl>
                    <Input type='text' placeholder='johndoe' {...field} />
                  </FormControl>
                  <FormMessage className='text-xs' />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input type='password' placeholder='*********' {...field} />
                  </FormControl>
                  <FormMessage className='text-xs' />
                </FormItem>
              )}
            />
            <Button type='submit' className='w-full'>
              Login
            </Button>
          </div>
        </form>
      </Form>
    </>
  )
}
