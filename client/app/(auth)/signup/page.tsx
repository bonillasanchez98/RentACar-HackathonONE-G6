import Link from 'next/link'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import BaseLayout from '@/components/base-layout'
import FormSignUp from '@/components/form-signup'

export default function LoginForm() {
  return (
    <BaseLayout>
      <main className='grid place-content-center py-16'>
        <Card className='mx-auto'>
          <CardHeader>
            <CardTitle className='text-xl'>Sign Up</CardTitle>
            <CardDescription>
              Introduzca sus datos para crear una cuenta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormSignUp />
            <div className='mt-4 text-center text-sm'>
              Already have an account?{' '}
              <Link href='/signin' className='underline'>
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </BaseLayout>
  )
}
