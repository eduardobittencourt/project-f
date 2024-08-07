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

import { setAccountPhone } from "../actions";

type UserPhoneForm = {
  defaultValue: string;
};

export default function UserPhoneForm({
  defaultValue,
}: Readonly<UserPhoneForm>) {
  const [state, action] = useFormState(setAccountPhone, { message: "" });

  return (
    <form action={action}>
      <Card>
        <CardHeader>
          <CardTitle>Telefone</CardTitle>
          <CardDescription>
            Caso você desejar receber notificações pelo WhatsApp, cadastre seu
            telefone de preferência.
          </CardDescription>
        </CardHeader>

        <CardContent className="w-full max-w-sm">
          <Input
            name="phone"
            type="text"
            placeholder="Telefone"
            ref={withMask("99 99999-9999", {
              removeMaskOnSubmit: true,
              showMaskOnHover: false,
            })}
            defaultValue={defaultValue}
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
