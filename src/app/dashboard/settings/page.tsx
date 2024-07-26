import { auth, signOut } from "@/auth";

import UserDocumentForm from "./components/UserDocumentForm";
import UserNameForm from "./components/UserNameForm";

export default async function SettingsPage() {
  const session = await auth();
  if (!session?.user?.id) return signOut();

  return (
    <div className="flex flex-col gap-8">
      <UserNameForm defaultValue={session.user.name ?? ""} />

      <UserDocumentForm defaultValue={session.user.document ?? ""} />

      {/* 

      <Card>
        <CardHeader>
          <CardTitle>Telefone</CardTitle>
          <CardDescription>
            Caso você desejar receber notificações pelo WhatsApp, cadastre seu
            telefone desejado.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="w-full max-w-sm">
            <Input
              name="phone"
              type="tel"
              placeholder="Telefone"
              defaultValue={session?.user?.phone ?? ""}
            />
          </form>
        </CardContent>

        <CardFooter className="flex justify-end border-t px-6 py-4">
          <Button type="submit">Salvar</Button>
        </CardFooter>
      </Card>

      <Card className="overflow-hidden border-destructive">
        <CardHeader>
          <CardTitle>Excluir conta</CardTitle>
          <CardDescription>
            Exclui sua conta e todo conteúdo diretamente relacionado a ela. Essa
            ação é irreversível, portanto continue com cautela.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-end border-t border-destructive bg-destructive/30 px-6 py-4">
          <Button
            type="submit"
            form="personal-information"
            variant="destructive"
          >
            Excluir pemanentemente a conta
          </Button>
        </CardFooter>
      </Card> */}
    </div>
  );
}
