import Hero from '@/components/landing-page/Hero'
import CarouselBrands from '@/components/landing-page/CarouselBrands'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between py-8 px-6 md:py-24 md:px-16 lg:px-24 lg:py-12'>
      <Hero />
      <CarouselBrands />

      <div className='text-center'>
        <h2 className='font-semibold text-xl italic'>HackathonONE - G6</h2>

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
