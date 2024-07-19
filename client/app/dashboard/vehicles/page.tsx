import DataTable from '@/components/dashboard/vehicle/data-table-vehicles/DataTable'
import DialogViewCar from '@/components/dashboard/vehicle/dialog-view-car/DialogViewCard'

export default function page() {
  return (
    <div className='w-full'>
      <div className='flex justify-end mb-3'>
        <div className='ml-auto flex items-center gap-2'>
          <DialogViewCar />
        </div>
      </div>
      <DataTable />
    </div>
  )
}
