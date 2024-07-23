import { Menu02Icon } from 'hugeicons-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import Logo from '../Logo'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

import { cn } from '@/lib/utils'

const navLinks = [
  { name: 'Reservar', href: '/#' },
  { name: 'Cómo funciona', href: '/#' },
  { name: 'Nuestra flota', href: '/#' },
  { name: 'Soporte', href: '/#' }
]

export default function Header() {
  return (
    <header className='sticky top-0 flex h-16 items-center gap-4 px-4 backdrop-blur bg-white/0 md:px-6 lg:px-24 xl:px-48'>
      <nav className='w-full flex gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
        <div className='w-full flex items-center gap-10'>
          <div className='flex justify-between flex-row-reverse items-center gap-3 w-full md:w-auto md:justify-start md:flex-row'>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant={'ghost'}
                  size='icon'
                  className='flex md:hidden'>
                  <Menu02Icon className='size-5' />
                </Button>
              </SheetTrigger>
              <SheetContent side={'left'} className='pt-8'>
                <SheetHeader>
                  <SheetTitle>
                    <Link href='/' className='flex gap-2 items-center text-2xl'>
                      <Logo />
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <div className='space-y-3'>
                  <NavLinks variant='mobile' />
                  <div className='flex flex-col gap-2'>
                    <Button className='w-full' asChild>
                      <Link href='/signin'>Sign In</Link>
                    </Button>

                    <Button className='w-full' variant={'outline'} asChild>
                      <Link href='/signup'>Sign Up</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <h1 className='font-bold text-xl'>
              <Link href='/' className='flex gap-2 items-center'>
                <Logo />
              </Link>
            </h1>
          </div>

          <NavLinks variant='desktop' />
        </div>

        <div className='hidden gap-2 items-center md:flex'>
          <Button asChild>
            <Link href='/signin'>Sign In</Link>
          </Button>

          <Button variant={'ghost'} asChild>
            <Link href='/signup'>Sign Up</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}

const NavLinks = ({
  variant,
  className
}: {
  variant: 'desktop' | 'mobile'
  className?: string
}) => {
  return (
    <ul
      className={cn(
        {
          'hidden gap-3 items-center md:flex lg:gap-4': variant === 'desktop',
          'mt-6 flex flex-col gap-3 md:hidden': variant === 'mobile'
        },
        className
      )}>
      {navLinks.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className='text-muted-foreground transition-colors text-sm lg:text-base hover:text-foreground'>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
