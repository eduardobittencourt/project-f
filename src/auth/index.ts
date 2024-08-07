import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth, { DefaultSession } from "next-auth";
import Google from "next-auth/providers/google";

import { db } from "@/db";
import { accounts } from "@/db/schema/accounts";
import { sessions } from "@/db/schema/sessions";
import { users } from "@/db/schema/users";
import { verificationTokens } from "@/db/schema/verificationTokens";

declare module "next-auth" {
  interface Session {
    user: {
      phone?: string;
      document?: string;
    } & DefaultSession["user"];
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  providers: [Google],
});
