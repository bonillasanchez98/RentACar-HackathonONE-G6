import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

const authOptions = {
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
            name: 'Admin'
          }
        }

        if (credentials.email === 'customer@email.com') {
          user = {
            name: 'Customer'
          }
        }

        console.log(credentials)

        if (user) {
          // Si el usuario es válido, devuelve el objeto de usuario
          return user
        } else {
          // Si las credenciales no son válidas, devuelve null
          return null
        }
      }
    })
  ],
  pages: {
    signIn: '/signin'
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions)
