"use client";

import { useFormState, useFormStatus } from "react-dom";

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

import { setAccountName } from "../actions";

type UserNameFormProps = {
  defaultValue: string;
};

export default function UserNameForm({
  defaultValue,
}: Readonly<UserNameFormProps>) {
  const [state, action] = useFormState(setAccountName, { message: "" });

  return (
    <form action={action}>
      <Card>
        <CardHeader>
          <CardTitle>Nome de apresentação</CardTitle>
          <CardDescription>
            Por favor insira seu nome completo, ou o nome de apresentação com o
            qual você se sente confortável.
          </CardDescription>
        </CardHeader>

        <CardContent className="w-full max-w-sm">
          <Input
            name="name"
            type="text"
            placeholder="Nome"
            defaultValue={defaultValue}
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
