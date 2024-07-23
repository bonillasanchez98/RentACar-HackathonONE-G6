import Hero from '@/components/landing-page/Hero'
import CarouselBrands from '@/components/landing-page/CarouselBrands'
import BaseLayout from '@/components/base-layout'

export default function Home() {
  return (
    <BaseLayout>
      <main className='flex flex-col items-center grow py-8 px-4 md:px-6 lg:px-24 xl:px-48'>
        <Hero />
        <CarouselBrands />
      </main>
    </BaseLayout>
  )
}
