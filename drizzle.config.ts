import * as dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";

dotenv.config({ path: ".env.local" });

if (!process.env.POSTGRES_URL) {
  throw new Error("POSTGRES_URL is missing");
}

export default defineConfig({
  schema: "./src/db/schema/*",
  out: "./src/db/drizzle",
  dialect: "postgresql",
  tablesFilter: ["project_f_*"],
  dbCredentials: {
    url: process.env.POSTGRES_URL,
  },
});
