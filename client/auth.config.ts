import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export default {
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {}
      },
      authorize: async (credentials) => {
        const data = {
          username: credentials.username,
          password: credentials.password
        }

        if (data.username === 'userAdmin') {
          if (data.password !== 'admin')
            throw new Error('Credenciales incorrectas')

          return {
            id: '0000',
            name: 'Administrador',
            email: 'admin@email.com',
            role: 'ADMIN'
          }
        }

        const response = await fetch(
          'http://localhost:8080/rentCar/auth/signIn',
          {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )

        const userFound = await response.json()

        if (userFound.status === 401) {
          throw new Error('Credenciales incorrectas')
        }

        return {
          id: userFound.id,
          name: userFound.username,
          email: userFound.email,
          role: userFound.userRole
        }
      }
    })
  ],
  pages: {
    signIn: '/signin'
  }
} satisfies NextAuthConfig
