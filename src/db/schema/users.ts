import { pgEnum, text, timestamp, uuid } from "drizzle-orm/pg-core";

import { pgTable } from "@/db/schema";

export enum Role {
  volunteer = "volunteer",
  admin = "admin",
}

export const roleEnum = pgEnum("role", [Role.volunteer, Role.admin]);

export const users = pgTable("user", {
  id: uuid("id").primaryKey(),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
  phone: text("phone"),
  document: text("document"),
  role: roleEnum("role"),
});
