'use client'

import Link from 'next/link'
import { CircleUser, Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Logo from '@/components/Logo'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import ButtonSignOut from '@/components/admin/vehicle/button-signout'

const navLinks = [
  { name: 'Dashboard', href: '/admin' },
  { name: 'Vehicles', href: '/admin/vehicles' },
  { name: 'Bookings', href: '/admin/bookings' }
]

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <header className='sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6'>
        <nav className='hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
          <Link
            href='/'
            className='flex items-center gap-2 text-lg font-semibold md:text-base'>
            <Logo />
          </Link>
          <NavLinks />
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant='outline'
              size='icon'
              className='shrink-0 md:hidden'>
              <Menu className='h-5 w-5' />
              <span className='sr-only'>Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='left'>
            <nav className='grid gap-6 text-lg font-medium'>
              <Link
                href='/'
                className='flex items-center gap-2 text-lg font-semibold'>
                <Logo />
              </Link>
              <NavLinks />
            </nav>
          </SheetContent>
        </Sheet>
        <div className='flex w-full justify-end items-center gap-4 md:ml-auto md:gap-2 lg:gap-4'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='secondary' size='icon' className='rounded-full'>
                <CircleUser className='h-5 w-5' />
                <span className='sr-only'>Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <ButtonSignOut />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className='flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10'>
        {children}
      </main>
    </div>
  )
}

const NavLinks = () => {
  const pathname = usePathname()

  return navLinks.map((link) => (
    <Link
      key={link.name}
      href={link.href}
      className={cn(
        'text-muted-foreground transition-colors hover:text-primary',
        { 'text-primary': pathname === link.href }
      )}>
      {link.name}
    </Link>
  ))
}
