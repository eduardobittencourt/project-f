import { text, timestamp, uuid } from "drizzle-orm/pg-core";

import { pgTable } from "@/db/schema";

import { users } from "./users";

export const locations = pgTable("location", {
  id: uuid("id").primaryKey(),
  name: text("name").notNull(),
  street: text("street").notNull(),
  number: text("number").notNull().default("S/N"),
  additionalInfo: text("additionalInfo"),
  city: text("city").notNull(),
  state: text("state").notNull(),
  zipCode: text("zipCode").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  createdBy: uuid("userId").references(() => users.id, {
    onDelete: "set null",
  }),
});
