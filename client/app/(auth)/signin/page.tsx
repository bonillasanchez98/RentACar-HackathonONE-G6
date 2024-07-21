import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import BaseLayout from '@/components/base-layout'
import FormSignIn from '@/components/form-signin'

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
            <FormSignIn />
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
