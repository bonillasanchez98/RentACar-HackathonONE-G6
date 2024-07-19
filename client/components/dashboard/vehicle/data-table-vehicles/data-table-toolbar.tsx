'use client'

import { Input } from '@/components/ui/input'
import DataTableFacetedFilter from './data-table-faceted-filter'
import { Table } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import { XIcon } from 'lucide-react'
import DataTableViewOptions from './data-table-view-options'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

const carMakes = [
  { label: 'Honda', value: 'Honda' },
  { label: 'Volkswagen', value: 'Volkswagen' },
  { label: 'Toyota', value: 'Toyota' },
  { label: 'Ford', value: 'Ford' }
]

const carTypes = [
  { label: 'Sedan', value: 'Sedan' },
  { label: 'SUV', value: 'SUV' },
  { label: 'Hatchback', value: 'Hatchback' }
]

export function DataTableToolbar<TData>({
  table
}: DataTableToolbarProps<TData>) {
  const isFiltered =
    table.getState().globalFilter !== undefined ||
    table.getState().columnFilters.length > 0

  return (
    <div className='w-full flex flex-col gap-2 items-center md:flex-row md:justify-between'>
      <div className='w-full flex flex-col flex-1 space-y-2 md:items-center md:flex-row md:space-x-2 md:space-y-0'>
        <Input
          placeholder='Filtrar vehivulos...'
          value={(table.getState().globalFilter as string) ?? ''}
          onChange={(event) => table.setGlobalFilter(event.target.value)}
          className='w-full h-8 md:w-[150px] lg:w-[250px]'
        />
        {table.getColumn('carMake') && (
          <DataTableFacetedFilter
            column={table.getColumn('carMake')}
            title='Marca'
            options={carMakes}
          />
        )}
        {table.getColumn('type') && (
          <DataTableFacetedFilter
            column={table.getColumn('type')}
            title='Tipo'
            options={carTypes}
          />
        )}
        {isFiltered && (
          <Button
            variant='ghost'
            onClick={() => {
              table.resetGlobalFilter()
              table.resetColumnFilters()
            }}
            className='h-8 px-2 lg:px-3'>
            Reset
            <XIcon className='ml-2 h-4 w-4' />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
