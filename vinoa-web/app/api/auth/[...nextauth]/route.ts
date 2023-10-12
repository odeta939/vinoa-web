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
    async jwt({ token, user, account, profile }) {
        if (account) {
            // token.accessToken = account.access_token;
            token.idToken = account.id_token
            // token.id = profile.id
            // token.expiresIn = account.expires_in;
            token.expiresAt = account.expires_at
        }

        return token
    },
    async session({ session, token }:any) {
        session.user.id = token.sub
        return session
    },
},
  // callbacks: {
    
  //   session({ session, token }: any) {
  //     if (session.user) {
  //       session.user.id = token.sub as string;
  //     }
  //     return session;
  //   },
  // },
  // session: {
  //   strategy: 'jwt',
  // },
});

export { authenticator as GET, authenticator as POST };
