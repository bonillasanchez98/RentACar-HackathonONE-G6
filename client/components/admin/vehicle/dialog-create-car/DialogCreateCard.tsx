'use client'

import { cn } from '@/lib/utils'
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
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'
import { PlusCircle } from 'lucide-react'

export default function DialogCreateCar() {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button size='sm' className='h-8 gap-1'>
            <PlusCircle className='h-3.5 w-3.5' />
            <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
              Nuevo vehiculo
            </span>
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[520px]'>
          <DialogHeader>
            <DialogTitle>Nuevo vehiculo</DialogTitle>
            <DialogDescription>
              Todos los campos con(*) son obligatorios
            </DialogDescription>
          </DialogHeader>
          <CreateCarFrom setOpen={setOpen} />
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
            Nuevo vehiculo
          </span>
        </Button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerContent className='max-h-[94%]'>
          <DrawerHeader className='text-left'>
            <DrawerTitle>Nuevo vehiculo</DrawerTitle>
            <DrawerDescription>
              Todos los campos con (*) son obligatorios
            </DrawerDescription>
          </DrawerHeader>
          <div className='.max-w-md w-full .mx-auto flex flex-col overflow-auto .p-2'>
            <CreateCarFrom className='px-4' setOpen={setOpen} />
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

function CreateCarFrom({
  className,
  setOpen
}: {
  className?: string
  setOpen: any
}) {
  return (
    <form
      className={cn('grid items-start gap-4 md:grid-cols-2', className)}
      onSubmit={(event) => {
        event.preventDefault()
        setOpen(false)
      }}>
      <div className='grid gap-2'>
        <Label htmlFor='carMake' className='flex gap-0.5'>
          Marca <span className='text-muted-foreground'>*</span>
        </Label>
        <Input type='text' id='carMake' placeholder='Honda' />
      </div>
      <div className='grid gap-2'>
        <Label htmlFor='carModel' className='flex gap-0.5'>
          Modelo
          <span className='text-muted-foreground'>*</span>
        </Label>
        <Input type='text' id='carModel' placeholder='Accord' />
      </div>
      <div className='grid gap-2'>
        <Label htmlFor='carYear' className='flex gap-0.5'>
          Año <span className='text-muted-foreground'>*</span>
        </Label>
        <Input type='text' id='carYear' placeholder='2018' />
      </div>
      <div className='grid gap-2'>
        <Label htmlFor='carType' className='flex gap-0.5'>
          Tipo <span className='text-muted-foreground'>*</span>
        </Label>
        <Input type='text' id='carType' placeholder='Sedan' />
      </div>
      <div className='grid gap-2'>
        <Label htmlFor='carTransmission' className='flex gap-0.5'>
          Transmisión <span className='text-muted-foreground'>*</span>
        </Label>
        <Input type='text' id='carTransmission' placeholder='Sedan' />
      </div>
      <div className='grid gap-2'>
        <Label htmlFor='carCapacity' className='flex gap-0.5'>
          Capacidad <span className='text-muted-foreground'>*</span>
        </Label>
        <Input type='text' id='carCapacity' placeholder='5' />
      </div>
      <div className='grid gap-2'>
        <Label htmlFor='carFueld' className='flex gap-0.5'>
          Combustible <span className='text-muted-foreground'>*</span>
        </Label>
        <Input type='text' id='carFueld' placeholder='Gasolina' />
      </div>
      <div className='grid gap-2'>
        <Label htmlFor='carPlateNumber' className='flex gap-0.5'>
          Número de placa <span className='text-muted-foreground'>*</span>
        </Label>
        <Input type='text' id='carPlateNumber' placeholder='Gasolina' />
      </div>
      <div className='grid gap-2 md:col-span-2'>
        <Label htmlFor='carPrice' className='flex gap-0.5'>
          Precio <span className='text-muted-foreground'>*</span>
        </Label>
        <Input type='text' id='carPrice' placeholder='60' />
      </div>
      <Button type='submit' className='md:col-span-2'>
        Guardar
      </Button>
    </form>
  )
}
