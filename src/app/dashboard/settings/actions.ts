"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

import { auth, signOut } from "@/auth";
import { db } from "@/db";
import { insertUserSchema, users } from "@/db/schema/users";

type ActionStateProps = {
  message: string;
};

export async function setAccountName(
  _state: ActionStateProps,
  formData: FormData,
) {
  const session = await auth();
  if (!session?.user?.id) return signOut();

  const updateSchema = insertUserSchema.pick({ name: true });
  const result = updateSchema.safeParse(Object.fromEntries(formData));

  if (!result.success)
    return {
      message: "Erro ao realizar a alteração",
    };

  await db
    .update(users)
    .set({ name: result.data.name })
    .where(eq(users.id, session.user.id));

  revalidatePath("/api/auth");

  return {
    message: "Nome alterado com sucesso",
  };
}