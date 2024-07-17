import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between py-8 px-6 md:py-24 md:px-16 lg:p-24'>
      <section className='w-full flex'>
        <div className='flex flex-col gap-4'>
          <h2 className='font-bold text-2xl max-w-lg text-pretty md:text-4xl'>
            Descubra la mejor experiencia en alquiler de carros
          </h2>
          <p className='max-w-lg text-muted-foreground'>
            Alquile el carro perfecto para su próxima aventura. Periodos de
            alquiler flexibles, asistencia 24/7 y precios competitivos.
          </p>
          <Button className='w-fit' asChild>
            <Link href='#'>Reserve ahora</Link>
          </Button>
        </div>
      </section>

      <div className='text-center'>
        <h1 className='text-4xl font-bold'>
          <a
            href='https://github.com/daldev14/RentACar-HackathonONE-G6'
            className='hover:text-indigo-700 hover:underline'>
            RentACar
          </a>
        </h1>
        <span className='font-semibold text-lg italic'>HackathonONE - G6</span>
        <ul className='flex flex-col items-center md:flex-row'>
          <li className='inline mr-2 md:after:content-["•"] md:after:ml-2 md:last:after:content-[""]'>
            <a
              href='https://github.com/daldev14'
              className='italic hover:underline'>
              @daldev
            </a>
          </li>
          <li className='inline mr-2 md:after:content-["•"] md:after:ml-2 md:last:after:content-[""]'>
            <a
              href='https://github.com/bonillasanchez98'
              className='italic hover:underline'>
              @bonillasanchez98
            </a>
          </li>
          <li className='inline mr-2 md:after:content-["•"] md:after:ml-2 md:last:after:content-[""]'>
            <a
              href='https://github.com/TheJose24'
              className='italic hover:underline'>
              @TheJose24
            </a>
          </li>
        </ul>
      </div>
    </main>
  )
}
