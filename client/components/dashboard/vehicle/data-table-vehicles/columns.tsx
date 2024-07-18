'use client'

import { Button } from '@/components/ui/button'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

export const data: Vehicles[] = [
  {
    id: '1',
    year: '2018',
    type: 'Sedan',
    color: 'Black',
    model: 'Accord',
    carMake: 'Honda',
    price: 50,
    plateNumber: 'ABC123',
    capacity: 5,
    fueld: 'Gasoline',
    transmission: 'Automatic'
  },
  {
    id: '2',
    year: '2019',
    type: 'SUV',
    color: 'Red',
    model: 'CR-V',
    carMake: 'Honda',
    price: 60,
    plateNumber: 'DEF456',
    capacity: 5,
    fueld: 'Gasoline',
    transmission: 'Automatic'
  },
  {
    id: '3',
    year: '2017',
    type: 'Hatchback',
    color: 'Blue',
    model: 'Golf',
    carMake: 'Volkswagen',
    price: 45,
    plateNumber: 'GHI789',
    capacity: 4,
    fueld: 'Diesel',
    transmission: 'Manual'
  },
  {
    id: '4',
    year: '2019',
    type: 'Sedan',
    color: 'White',
    model: 'Camry',
    carMake: 'Toyota',
    price: 55,
    plateNumber: 'JKL012',
    capacity: 5,
    fueld: 'Gasoline',
    transmission: 'Automatic'
  },
  {
    id: '5',
    year: '2018',
    type: 'SUV',
    color: 'Silver',
    model: 'Rav4',
    carMake: 'Toyota',
    price: 65,
    plateNumber: 'MNO345',
    capacity: 5,
    fueld: 'Gasoline',
    transmission: 'Automatic'
  },
  {
    id: '6',
    year: '2020',
    type: 'Sedan',
    color: 'Gray',
    model: 'Corolla',
    carMake: 'Toyota',
    price: 50,
    plateNumber: 'PQR678',
    capacity: 5,
    fueld: 'Gasoline',
    transmission: 'Automatic'
  },
  {
    id: '7',
    year: '2016',
    type: 'Hatchback',
    color: 'Red',
    model: 'Fiesta',
    carMake: 'Ford',
    price: 40,
    plateNumber: 'STU901',
    capacity: 4,
    fueld: 'Gasoline',
    transmission: 'Manual'
  },
  {
    id: '8',
    year: '2019',
    type: 'SUV',
    color: 'Black',
    model: 'Escape',
    carMake: 'Ford',
    price: 60,
    plateNumber: 'VWX234',
    capacity: 5,
    fueld: 'Gasoline',
    transmission: 'Automatic'
  },
  {
    id: '9',
    year: '2017',
    type: 'Sedan',
    color: 'White',
    model: 'Civic',
    carMake: 'Honda',
    price: 50,
    plateNumber: 'YZA567',
    capacity: 5,
    fueld: 'Gasoline',
    transmission: 'Automatic'
  },
  {
    id: '10',
    year: '2020',
    type: 'SUV',
    color: 'Blue',
    model: 'Tiguan',
    carMake: 'Volkswagen',
    price: 70,
    plateNumber: 'BCD890',
    capacity: 5,
    fueld: 'Gasoline',
    transmission: 'Automatic'
  },
  {
    id: '11',
    year: '2019',
    type: 'Sedan',
    color: 'Black',
    model: 'Accord',
    carMake: 'Honda',
    price: 55,
    plateNumber: 'EFG123',
    capacity: 5,
    fueld: 'Gasoline',
    transmission: 'Automatic'
  },
  {
    id: '12',
    year: '2018',
    type: 'SUV',
    color: 'Red',
    model: 'CR-V',
    carMake: 'Honda',
    price: 65,
    plateNumber: 'HIJ456',
    capacity: 5,
    fueld: 'Gasoline',
    transmission: 'Automatic'
  },
  {
    id: '13',
    year: '2017',
    type: 'Hatchback',
    color: 'Blue',
    model: 'Golf',
    carMake: 'Volkswagen',
    price: 45,
    plateNumber: 'KLM789',
    capacity: 4,
    fueld: 'Diesel',
    transmission: 'Manual'
  },
  {
    id: '14',
    year: '2019',
    type: 'Sedan',
    color: 'White',
    model: 'Camry',
    carMake: 'Toyota',
    price: 60,
    plateNumber: 'NOP012',
    capacity: 5,
    fueld: 'Gasoline',
    transmission: 'Automatic'
  },
  {
    id: '15',
    year: '2018',
    type: 'SUV',
    color: 'Silver',
    model: 'Rav4',
    carMake: 'Toyota',
    price: 70,
    plateNumber: 'QRS345',
    capacity: 5,
    fueld: 'Gasoline',
    transmission: 'Automatic'
  },
  {
    id: '16',
    year: '2020',
    type: 'Sedan',
    color: 'Gray',
    model: 'Corolla',
    carMake: 'Toyota',
    price: 55,
    plateNumber: 'TUV678',
    capacity: 5,
    fueld: 'Gasoline',
    transmission: 'Automatic'
  },
  {
    id: '17',
    year: '2016',
    type: 'Hatchback',
    color: 'Red',
    model: 'Fiesta',
    carMake: 'Ford',
    price: 45,
    plateNumber: 'VWX901',
    capacity: 4,
    fueld: 'Gasoline',
    transmission: 'Manual'
  },
  {
    id: '18',
    year: '2019',
    type: 'SUV',
    color: 'Black',
    model: 'Escape',
    carMake: 'Ford',
    price: 65,
    plateNumber: 'YZA234',
    capacity: 5,
    fueld: 'Gasoline',
    transmission: 'Automatic'
  },
  {
    id: '19',
    year: '2017',
    type: 'Sedan',
    color: 'White',
    model: 'Civic',
    carMake: 'Honda',
    price: 55,
    plateNumber: 'BCD567',
    capacity: 5,
    fueld: 'Gasoline',
    transmission: 'Automatic'
  },
  {
    id: '20',
    year: '2020',
    type: 'SUV',
    color: 'Blue',
    model: 'Tiguan',
    carMake: 'Volkswagen',
    price: 75,
    plateNumber: 'EFG890',
    capacity: 5,
    fueld: 'Gasoline',
    transmission: 'Automatic'
  }
]

export type Vehicles = {
  id: string
  carMake: string
  model: string
  year: string
  color: string
  capacity: number
  fueld: string
  transmission: string
  type: string
  plateNumber: string
  price: number
  description?: string
}

export const columns: ColumnDef<Vehicles>[] = [
  {
    id: 'description',
    accessorFn: (row) => `${row.carMake} ${row.model} ${row.year}`,
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Descripción
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    }
  },
  {
    accessorKey: 'carMake',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Marca
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('carMake')}</div>
    )
  },
  {
    accessorKey: 'model',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Model
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    },
    cell: ({ row }) => <div className='capitalize'>{row.getValue('model')}</div>
  },
  {
    accessorKey: 'year',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Año
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    },
    cell: ({ row }) => <div className='capitalize'>{row.getValue('year')}</div>
  },
  {
    accessorKey: 'type',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Tipo
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    },
    cell: ({ row }) => <div className='capitalize'>{row.getValue('type')}</div>
  },
  {
    accessorKey: 'transmission',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Transmisión
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('transmission')}</div>
    )
  },
  {
    accessorKey: 'capacity',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Capacidad
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('capacity')}</div>
    )
  },
  {
    accessorKey: 'price',
    header: () => <div className='text-right'>Precio</div>,
    cell: ({ row }) => {
      const price = parseFloat(row.getValue('price'))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(price)

      return <div className='text-right font-medium'>{formatted}</div>
    }
  }
]
