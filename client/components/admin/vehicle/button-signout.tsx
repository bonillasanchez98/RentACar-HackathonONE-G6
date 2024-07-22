'use client'

import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'

export default function ButtonSignOut() {
  return (
    <Button
      onClick={() =>
        signOut({
          callbackUrl: '/signin'
        })
      }
      variant={'ghost'}
      size={'sm'}>
      Logout
    </Button>
  )
}
