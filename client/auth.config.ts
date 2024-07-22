import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export default {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      authorize: async (credentials) => {
        let user = null

        if (credentials.email === 'daldev@email.com') {
          user = {
            name: 'Daniel',
            email: 'daniel@email.com',
            image: null,
            role: 'admin'
          }
        }

        if (credentials.email === 'customer@email.com') {
          user = {
            name: 'Customer',
            email: 'customer@email.com',
            image: null,
            role: 'customer'
          }
        }

        console.log(credentials)

        if (user) {
          // Si el usuario es válido, devuelve el objeto de usuario
          return user
        } else {
          // Si las credenciales no son válidas, devuelve null
          throw new Error('Invalid credentials')
          return null
        }
      }
    })
  ],
  pages: {
    signIn: '/signin'
  }
} satisfies NextAuthConfig
