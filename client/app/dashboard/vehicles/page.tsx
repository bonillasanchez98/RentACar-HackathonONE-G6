import DataTable from '@/components/dashboard/vehicle/data-table-vehicles/DataTable'
import DialogCreateCar from '@/components/dashboard/vehicle/dialog-create-car/DialogCreateCard'

export default function page() {
  return (
    <div className='w-full'>
      <div className='flex justify-end mb-3'>
        <div className='ml-auto flex items-center gap-2'>
          <DialogCreateCar />
        </div>
      </div>
      <DataTable />
    </div>
  )
}
