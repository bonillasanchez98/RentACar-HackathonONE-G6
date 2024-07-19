'use client'

import CustomDialog from '@/components/CustomDialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { Label } from '@radix-ui/react-label'

export default function DialogViewCar() {
  return (
    <CustomDialog title='Ver vehiculo' btnText='Editar' description>
      <FormEditCar />
    </CustomDialog>
  )
}

function FormEditCar({
  className,
  setOpen
}: {
  className?: string
  setOpen?: any
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
