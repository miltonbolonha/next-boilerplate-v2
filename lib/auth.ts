import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthConfig);
