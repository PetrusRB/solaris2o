import NextAuth, { type DefaultSession } from "next-auth"
 
declare module "next-auth" {
  // Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
  interface Session {
    // A JWT which can be used as Authorization header with supabase-js for RLS.
    accessToken?: string
    supabaseAccessToken?: string
    user: {
      // The user's postal address
      address: string
    } & DefaultSession["user"]
  }
}