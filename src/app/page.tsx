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
        <Button type="submit">Sign in</Button>
      </form>
    </main>
  );
}
