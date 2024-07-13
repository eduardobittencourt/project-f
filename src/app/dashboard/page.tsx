import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export default async function Dashboard() {
  const session = await auth();

  async function action() {
    "use server";
    await signOut({ redirectTo: "/" });
  }

  return (
    <main>
      <h1>Olá {session?.user?.name}</h1>

      <form action={action}>
        <Button type="submit">Sign out</Button>
      </form>
    </main>
  );
}
