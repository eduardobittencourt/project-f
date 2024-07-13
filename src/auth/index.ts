import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

import { db } from "@/db";
import { accounts } from "@/db/schema/accounts";
import { authenticators } from "@/db/schema/authenticators";
import { sessions } from "@/db/schema/sessions";
import { users } from "@/db/schema/users";
import { verificationTokens } from "@/db/schema/verificationTokens";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
    authenticatorsTable: authenticators,
  }),
  providers: [Google],
});
