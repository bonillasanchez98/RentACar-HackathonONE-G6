import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>
          <a
            href='https://github.com/daldev14/RentACar-HackathonONE-G6'
            className='hover:text-indigo-700 hover:underline'
          >
            RentACar
          </a>
        </h1>
        <span className='font-semibold text-lg italic'>HackathonONE - G6</span>
        <ul className='flex items-center'>
          <li className='inline mr-2 after:content-["•"] after:ml-2 last:after:content-[""]'>
            <a href='https://github.com/daldev14' className='hover:underline'>
              @daldev
            </a>
          </li>
          <li className='inline mr-2 after:content-["•"] after:ml-2 last:after:content-[""]'>
            <a
              href='https://github.com/bonillasanchez98'
              className='hover:underline'
            >
              @bonillasanchez98
            </a>
          </li>
          <li className='inline mr-2 after:content-["•"] after:ml-2 last:after:content-[""]'>
            <a href='https://github.com/TheJose24' className='hover:underline'>
              @TheJose24
            </a>
          </li>
        </ul>
      </div>
    </main>
  )
}
