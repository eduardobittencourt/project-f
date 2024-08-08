"use client";

import { useFormState, useFormStatus } from "react-dom";
import { withMask } from "use-mask-input";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { setAccountDocument } from "../actions";

type UserDocumentFormProps = {
  defaultValue: string;
};

export default function UserDocumentForm({
  defaultValue,
}: Readonly<UserDocumentFormProps>) {
  const [state, action] = useFormState(setAccountDocument, { message: "" });

  return (
    <form action={action}>
      <Card>
        <CardHeader>
          <CardTitle>CPF</CardTitle>
          <CardDescription>
            Seu CPF é importante para garantir que cada conta seja única e que
            uma mesma pessoa não possua dois cadastros.
          </CardDescription>
        </CardHeader>

        <CardContent className="w-full max-w-sm">
          <Input
            name="document"
            type="text"
            placeholder="CPF"
            defaultValue={defaultValue}
            ref={withMask("cpf", {
              removeMaskOnSubmit: true,
              showMaskOnHover: false,
            })}
            required
          />
        </CardContent>

        <CardFooter className="flex justify-between border-t px-6 py-4">
          <span className="text-sm">{state?.message}</span>

          <SubmitButton />
        </CardFooter>
      </Card>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Salvando" : "Salvar"}
    </Button>
  );
}
