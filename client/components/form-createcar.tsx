'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { createCarSchema } from '@/lib/zod'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

export default function FormCreateCar({ className }: { className?: string }) {
  const route = useRouter()

  // 1. Define your form.
  const form = useForm<z.infer<typeof createCarSchema>>({
    resolver: zodResolver(createCarSchema),
    defaultValues: {
      brand: '',
      model: '',
      year: 2010,
      color: '',
      capacity: '',
      transmission: '',
      fuel: '',
      vehicleType: '',
      price: 160
    }
  })
  async function onSubmit(values: z.infer<typeof createCarSchema>) {
    const response = await fetch('/api/cars/create', {
      method: 'POST',
      body: JSON.stringify({
        brand: values.brand,
        model: values.model,
        year: values.year,
        color: values.color,
        capacity: values.capacity,
        carTransmission: values.transmission,
        fuel: values.fuel,
        vehicleType: values.vehicleType,
        price: values.price
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const isOk = await response.json()

    if (isOk.ok) {
      console.log('Vehiculo guardo')
    } else {
      console.log('Vehiculo no guardado')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className={cn('grid items-start gap-4 md:grid-cols-2', className)}>
          <FormField
            control={form.control}
            name='brand'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Marca</FormLabel>
                <FormControl>
                  <Input type='text' placeholder='Honda' {...field} />
                </FormControl>
                <FormMessage className='text-xs' />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='model'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Modelo</FormLabel>
                <FormControl>
                  <Input type='text' placeholder='Accord' {...field} />
                </FormControl>
                <FormMessage className='text-xs' />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='year'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Año</FormLabel>
                <FormControl>
                  <Input type='number' placeholder='2018' {...field} />
                </FormControl>
                <FormMessage className='text-xs' />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='vehicleType'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de vehiculo</FormLabel>
                <FormControl>
                  <Input type='text' placeholder='Sedan' {...field} />
                </FormControl>
                <FormMessage className='text-xs' />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='transmission'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Transmisión</FormLabel>
                <FormControl>
                  <Input type='text' placeholder='Mecánica' {...field} />
                </FormControl>
                <FormMessage className='text-xs' />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='capacity'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Capacidad</FormLabel>
                <FormControl>
                  <Input type='text' placeholder='5' {...field} />
                </FormControl>
                <FormMessage className='text-xs' />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='fuel'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Combustible</FormLabel>
                <FormControl>
                  <Input type='text' placeholder='Gasolina' {...field} />
                </FormControl>
                <FormMessage className='text-xs' />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='color'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Color</FormLabel>
                <FormControl>
                  <Input type='text' placeholder='Negro' {...field} />
                </FormControl>
                <FormMessage className='text-xs' />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='price'
            render={({ field }) => (
              <FormItem className='md:col-span-2'>
                <FormLabel>Precio</FormLabel>
                <FormControl>
                  <Input type='number' placeholder='120' {...field} />
                </FormControl>
                <FormMessage className='text-xs' />
              </FormItem>
            )}
          />

          <Button type='submit' className='w-full md:col-span-2'>
            Guardar
          </Button>
        </div>
      </form>
    </Form>
  )
}
