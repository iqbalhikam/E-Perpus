import { ModeToggle } from "~/components/ModeToogle";
import { Button } from "~/components/ui/button";

export default function Home() {

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-background gap-4">
        <h1 className="text-4xl text-primary">Hello World</h1>
        <Button>Hello!, Click Me</Button>

        <ModeToggle/>
      </main>
    </>
  );
}
