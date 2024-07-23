import { Github01Icon } from 'hugeicons-react'

export default function Footer() {
  return (
    <footer className='flex flex-col justify-between items-center px-4 py-6 md:px-6 lg:px-24 xl:px-48 md:flex-row'>
      <a
        className='text-muted-foreground text-sm md:text-base hover:underline hover:text-black'
        rel='noreferrer noopener nofollow'
        target='_blank'
        href='https://github.com/daldev14/RentACar-HackathonONE-G6'>
        HackathonONE - G6
      </a>
      <ul className='flex items-center gap-4'>
        <li>
          <a
            className='flex items-center gap-1 text-muted-foreground text-sm md:text-base hover:underline hover:text-black'
            rel='noreferrer noopener nofollow'
            target='_blank'
            href='https://github.com/daldev14'>
            <Github01Icon className='size-5' />
            daldev14
          </a>
        </li>
        <li>
          <a
            className='flex items-center gap-1 text-muted-foreground text-sm md:text-base hover:underline hover:text-black'
            rel='noreferrer noopener nofollow'
            target='_blank'
            href='https://github.com/bonillasanchez98'>
            <Github01Icon className='size-5' />
            bonillasanchez98
          </a>
        </li>
      </ul>
    </footer>
  )
}
