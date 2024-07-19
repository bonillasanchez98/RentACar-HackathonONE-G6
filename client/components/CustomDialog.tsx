'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerPortal,
  DrawerOverlay
} from '@/components/ui/drawer'

import React, { useState } from 'react'
import { PlusCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CustomDialogProps extends CustomDialogButtonProps {
  children: React.ReactNode
  title?: string | React.ReactNode
  description?: boolean | string | React.ReactNode
}

export default function CustomDialog({
  children,
  title,
  description,
  btnText
}: CustomDialogProps) {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button size='sm' className='h-8 gap-1'>
            <PlusCircle className='h-3.5 w-3.5' />
            <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
              {btnText ? <>{btnText}</> : 'Nuevo item'}
            </span>
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[520px]'>
          <DialogHeader>
            {title ?? <DialogTitle>{title}</DialogTitle>}
            {description ?? (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
          {children}
          <DialogFooter>
            <DialogClose asChild>
              <Button className='w-full bg-black text-white hover:bg-black/90'>
                Cerrar
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button size='sm' className='h-8 gap-1'>
          <PlusCircle className='h-3.5 w-3.5' />
          <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
            {btnText ? <>{btnText}</> : 'Nuevo item'}
          </span>
        </Button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerContent className='max-h-[94%]'>
          <DrawerHeader className='text-left'>
            {title ?? <DrawerTitle>{title}</DrawerTitle>}
            {description ?? (
              <DrawerDescription>{description}</DrawerDescription>
            )}
          </DrawerHeader>
          <div className='.max-w-md w-full .mx-auto flex flex-col overflow-auto .p-2'>
            {children}
            <DrawerFooter className='pt-2'>
              <DrawerClose asChild>
                <Button className='w-full bg-black text-white hover:bg-black/90'>
                  Cerrar
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  )
}

interface CustomDialogButtonProps {
  btnType?: 'default' | 'edit'
  btnText?: boolean | string
}

const CustomDialogButton = ({ btnText, btnType }: CustomDialogButtonProps) => {
  return (
    <Button
      size='sm'
      className={cn('h-8 gap-1', {
        'bg-yellow-400 text-white': btnType === 'edit'
      })}>
      <PlusCircle className='h-3.5 w-3.5' />
      <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
        {btnText ? <>{btnText}</> : 'Nuevo item'}
      </span>
    </Button>
  )
}
