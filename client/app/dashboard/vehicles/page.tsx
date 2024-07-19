import { PlusCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import DataTable from '@/components/dashboard/vehicle/data-table-vehicles/DataTable'

export default function page() {
  return (
    <div className='w-full'>
      <div className='flex justify-end mb-3'>
        <div className='ml-auto flex items-center gap-2'>
          <Button size='sm' className='h-8 gap-1'>
            <PlusCircle className='h-3.5 w-3.5' />
            <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
              Add Vehicle
            </span>
          </Button>
        </div>
      </div>
      <DataTable />
    </div>
  )
}
