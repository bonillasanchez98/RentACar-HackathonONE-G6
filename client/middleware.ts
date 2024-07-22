import NextAuth from 'next-auth'
import authConfig from './auth.config'
import { NextResponse } from 'next/server'
import { auth as CustomAuth } from '@/auth'

const { auth } = NextAuth(authConfig)

const publicRoutes = ['/', '/prices']
const authRoutes = ['/signin', '/signup']
const customerRoutes = ['/dashboard', '/profile']
const adminRoutes = ['/admin', '/admin/vehicles', '/admin/bookings']
const apiAuthPrefix = '/api/auth'
const apiCarsPrefix = '/api/cars'

export default auth(async (req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth
  const session = await CustomAuth()
  const userRole = session?.user.role || 'guest'

  // Permitir todas las rutas de API de autenticación
  if (nextUrl.pathname.startsWith(apiAuthPrefix)) {
    return NextResponse.next()
  }

  // Permitir todas las rutas de API de vehiculos
  if (nextUrl.pathname.startsWith(apiCarsPrefix)) {
    return NextResponse.next()
  }

  // Permitir acceso a rutas públicas sin importar el estado de autenticación
  if (publicRoutes.includes(nextUrl.pathname)) {
    return NextResponse.next()
  }

  // Redirigir a /dashboard si el usuario está logueado y trata de acceder a rutas de autenticación
  if (isLoggedIn && authRoutes.includes(nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/dashboard', nextUrl))
  }

  // Redirigir a /signin si el usuario no está logueado y trata de acceder a una ruta protegida
  if (
    !isLoggedIn &&
    !authRoutes.includes(nextUrl.pathname) &&
    !publicRoutes.includes(nextUrl.pathname)
  ) {
    return NextResponse.redirect(new URL('/signin', nextUrl))
  }

  // Manejar acceso basado en roles
  if (isLoggedIn) {
    if (userRole === 'admin') {
      // Los administradores tienen acceso a todas las rutas
      return NextResponse.next()
    }

    if (userRole === 'customer' && !customerRoutes.includes(nextUrl.pathname)) {
      return NextResponse.redirect(new URL('/dashboard', nextUrl))
    }
  }

  return NextResponse.next()
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
}
