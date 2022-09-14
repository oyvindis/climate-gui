import NextAuth from 'next-auth';
import OktaProvider from 'next-auth/providers/okta';
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    OktaProvider({
      clientId: process.env.OKTA_CLIENT_ID,
      clientSecret: process.env.NEXTAUTH_SECRET,
      issuer: process.env.OKTA_ISSUER
    })
  ]
};
export default NextAuth(authOptions);
