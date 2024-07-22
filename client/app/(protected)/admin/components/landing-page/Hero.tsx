import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Car1 from '@/public/images/cars/car1.webp'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className='w-full flex flex-col-reverse justify-between items-center lg:flex-row'>
      <div className='flex flex-col gap-4'>
        <h2 className='font-bold text-2xl w-full md:max-w-xl text-pretty md:text-4xl'>
          Descubra la mejor experiencia en alquiler de carros
        </h2>
        <p className='text-sm max-w-xl text-muted-foreground md:text-base'>
          Alquile el carro perfecto para su próxima aventura. Periodos de
          alquiler flexibles, asistencia 24/7 y precios competitivos.
        </p>
        <Button className='w-fit' asChild>
          <Link href='#'>Reserve ahora</Link>
        </Button>
      </div>

      <figure className='overflow-hidden w-[300px] h-[200px] md:w-[500px] md:h-[300px] grid place-content-center'>
        <Image
          src={Car1}
          alt='car'
          width={500}
          height={300}
          className='hidden md:block'
        />
        <Image
          src={Car1}
          alt='car'
          width={300}
          height={200}
          className='md:hidden'
        />
      </figure>
    </section>
  )
}
