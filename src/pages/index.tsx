import { ModeToggle } from "~/components/features/auth/components/ModeToogle";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background">
        <h1 className="text-4xl text-primary">Hello World</h1>
        <Button>Hello!, Click Me</Button>
      </main>
    </>
  );
}
