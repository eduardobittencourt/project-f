import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

export default function Home() {
  async function action() {
    "use server";
    await signIn("google", { redirectTo: "/dashboard" });
  }

  return (
    <main>
      <form action={action}>
        <Button type="submit">Login com Google</Button>
      </form>
    </main>
  );
}
