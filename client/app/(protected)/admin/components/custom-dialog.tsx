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
import { PlusCircle, PencilIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CustomDialogProps {
  children: React.ReactNode
  title: string | React.ReactNode
  btnType?: 'default' | 'edit'
  btnText?: boolean | string
}

export default function CustomDialog({
  children,
  title,
  btnText,
  btnType = 'default'
}: CustomDialogProps) {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            size='sm'
            className={cn('h-8 gap-1', {
              'bg-yellow-400 text-white hover:bg-yellow-400/90':
                btnType === 'edit'
            })}>
            {btnType === 'default' ? (
              <PlusCircle className='h-3.5 w-3.5' />
            ) : (
              <PencilIcon className='h-3.5 w-3.5' />
            )}
            <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
              {btnText ? <>{btnText}</> : 'Nuevo item'}
            </span>
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[520px]'>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
              Todos los campos con(*) son obligatorios
            </DialogDescription>
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
        <Button
          size='sm'
          className={cn('h-8 gap-1', {
            'bg-yellow-400 text-white hover:bg-yellow-400/90':
              btnType === 'edit'
          })}>
          {btnType === 'default' ? (
            <PlusCircle className='h-3.5 w-3.5' />
          ) : (
            <PencilIcon className='h-3.5 w-3.5' />
          )}
          <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
            {btnText ? <>{btnText}</> : 'Nuevo item'}
          </span>
        </Button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerContent className='max-h-[94%]'>
          <DrawerHeader className='text-left'>
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>
              Todos los campos con(*) son obligatorios
            </DrawerDescription>
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
