import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { env } from 'process';

const authenticator = NextAuth({
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  callbacks: {
    session({ session, token }: any) {
      if (session.user) {
        session.user.id = token.sub as string;
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
});

export { authenticator as GET, authenticator as POST };
