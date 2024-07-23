import React from 'react'
import Header from './landing-page/Header'
import Footer from './footer'

export default function BaseLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className='absolute top-0 z-[-2] h-screen w-full bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]'></div>
      <Header />
      {children}
      <Footer />
    </>
  )
}
