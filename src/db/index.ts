import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";

import * as accounts from "./schema/accounts";
import * as authenticators from "./schema/authenticators";
import * as sessions from "./schema/sessions";
import * as users from "./schema/users";
import * as verificationTokens from "./schema/verificationTokens";

export const db = drizzle(sql, {
  schema: {
    ...accounts,
    ...authenticators,
    ...sessions,
    ...users,
    ...verificationTokens,
  },
});
