'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel'

import {
  ToyotaIcon,
  JeepIcon,
  NissanIcon,
  VolkswagenIcon,
  Ferrari,
  MercedezBenzIcon,
  BMWIcon,
  AudiIcon,
  TeslaIcon
} from '../icons/brands'

import AutoScroll from 'embla-carousel-auto-scroll'

export default function InfinityLogos() {
  return (
    <Carousel
      plugins={[
        AutoScroll({
          speed: 0.5,
          startDelay: 0,
          stopOnInteraction: false
        })
      ]}
      opts={{
        loop: true
      }}
      className='w-full lg:max-w-4xl mx-auto text-center my-10'>
      <CarouselContent>
        <CarouselItem className='w-auto basis-[20%] md:basis-[13%]'>
          <ToyotaIcon className='size-10' />
        </CarouselItem>
        <CarouselItem className='w-auto basis-[20%] md:basis-[13%]'>
          <JeepIcon className='size-10' />
        </CarouselItem>
        <CarouselItem className='w-auto basis-[20%] md:basis-[13%]'>
          <NissanIcon className='size-10' />
        </CarouselItem>
        <CarouselItem className='w-auto basis-[20%] md:basis-[13%]'>
          <VolkswagenIcon className='size-10' />
        </CarouselItem>
        <CarouselItem className='w-auto basis-[20%] md:basis-[13%]'>
          <Ferrari className='size-10' />
        </CarouselItem>
        <CarouselItem className='w-auto basis-[20%] md:basis-[13%]'>
          <MercedezBenzIcon className='size-10' />
        </CarouselItem>
        <CarouselItem className='w-auto basis-[20%] md:basis-[13%]'>
          <BMWIcon className='size-10' />
        </CarouselItem>
        <CarouselItem className='w-auto basis-[20%] md:basis-[13%]'>
          <AudiIcon className='size-10' />
        </CarouselItem>
        <CarouselItem className='w-auto basis-[20%] md:basis-[13%]'>
          <TeslaIcon className='size-10' />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
