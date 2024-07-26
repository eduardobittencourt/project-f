import { auth } from "@/auth";
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

export default async function SettingsPage() {
  const session = await auth();

  return (
    <div className="flex flex-col gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Nome de apresentação</CardTitle>
          <CardDescription>
            Por favor insira seu nome completo, ou o nome de apresentação com o
            qual você se sente confortável.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="w-full max-w-sm">
            <Input
              name="name"
              type="text"
              placeholder="Nome"
              defaultValue={session?.user?.name ?? ""}
            />
          </form>
        </CardContent>

        <CardFooter className="flex justify-end border-t px-6 py-4">
          <Button type="submit">Salvar</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>CPF</CardTitle>
          <CardDescription>
            Seu CPF é importante para garantir que cada conta seja única e que
            uma mesma pessoa não possua dois cadastros.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="w-full max-w-sm">
            <Input
              name="document"
              type="text"
              placeholder="CPF"
              defaultValue={session?.user?.document ?? ""}
            />
          </form>
        </CardContent>

        <CardFooter className="flex justify-end border-t px-6 py-4">
          <Button type="submit">Salvar</Button>
        </CardFooter>
      </Card>

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
      </Card>
    </div>
  );
}
