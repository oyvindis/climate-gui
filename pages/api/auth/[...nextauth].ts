import NextAuth from 'next-auth';
import OktaProvider from 'next-auth/providers/okta';
import axios from 'axios';
import qs from 'qs';
import { encode } from 'js-base64';

async function refreshAccessToken(token) {
  const data = qs.stringify({
    grant_type: 'refresh_token',
    refresh_token: token.refreshToken
  });

  const usernamePwd = `${process.env.OKTA_CLIENT_ID}:${process.env.NEXTAUTH_SECRET}`;

  return axios({
    method: 'post',
    url: `${process.env.OKTA_ISSUER}/v1/token`,
    headers: {
      Authorization: `Basic ${encode(usernamePwd)}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: data
  })
    .then(({ data: refreshedTokens }) => {
      return {
        ...token,
        accessToken: refreshedTokens.access_token,
        accessTokenExpires: Date.now() + refreshedTokens.expires_at * 1000,
        refreshToken: refreshedTokens.refresh_token ?? token.refreshToken
      };
    })
    .catch(error => {
      console.log('Error', error);
      return {
        ...token,
        error: 'RefreshAccessTokenError'
      };
    });
}

export const authOptions = {
  providers: [
    OktaProvider({
      clientId: process.env.OKTA_CLIENT_ID,
      clientSecret: process.env.NEXTAUTH_SECRET,
      issuer: process.env.OKTA_ISSUER
    })
  ],
  callbacks: {
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.error = token.error;

      return session;
    },
    async jwt({ account, token }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.accessTokenExpires = Date.now() + account.expires_at * 1000;
      }
      if (Date.now() < token.accessTokenExpires) {
        return token;
      }

      return refreshAccessToken(token);
    }
  }
};
export default NextAuth(authOptions);
