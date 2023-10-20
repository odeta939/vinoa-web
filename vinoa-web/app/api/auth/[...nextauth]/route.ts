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
  secret: env.NEXTAUTH_SECRET ?? '',
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.idToken = account.id_token;
        token.expiresAt = account.expires_at;
      }

      return token;
    },
    async session({ session, token }: any) {
      session.user.id = token.sub;
      return session;
    },
  },
});

export { authenticator as GET, authenticator as POST };
