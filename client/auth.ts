import NextAuth from 'next-auth'
import authConfig from './auth.config'

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // User is available during sign-in
        token.role = user.role
      }

      return token
    },
    async session({ session, token }) {
      if (session.user) session.user.role = token.role

      return session
    }
  },
  ...authConfig
})
