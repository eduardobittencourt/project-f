import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import UserDocumentForm from "./components/UserDocumentForm";
import UserNameForm from "./components/UserNameForm";
import UserPhoneForm from "./components/UserPhoneForm";

export default async function SettingsPage() {
  const session = await auth();
  if (!session?.user?.id) return signOut();

  return (
    <div className="flex flex-col gap-8">
      <UserNameForm defaultValue={session.user.name ?? ""} />

      <UserDocumentForm defaultValue={session.user.document ?? ""} />

      <UserPhoneForm defaultValue={session.user.phone ?? ""} />

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
