import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import BaseLayout from '@/components/BaseLayout'

export default function page() {
  return (
    <BaseLayout>
      <main className='grid place-content-center py-16'>
        <Card className='mx-auto max-w-sm'>
          <CardHeader>
            <CardTitle className='text-2xl'>Login</CardTitle>
            <CardDescription>
              Introduzca su dirección de correo electrónico para acceder a su
              cuenta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid gap-4'>
              <div className='grid gap-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='john.doe@mail.com'
                  required
                />
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
                <Input id='password' type='password' required />
              </div>
              <Button type='submit' className='w-full'>
                Login
              </Button>
              <Button variant='outline' className='hidden w-full'>
                Login with Google
              </Button>
            </div>
            <div className='mt-4 text-center text-sm'>
              Don&apos;t have an account?{' '}
              <Link href='/signup' className='underline'>
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </BaseLayout>
  )
}
