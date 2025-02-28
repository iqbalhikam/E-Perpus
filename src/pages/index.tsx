import Head from "next/head";
import Link from "next/link";
import { ModeToggle } from "~/components/ModeToogle";
import { Button } from "~/components/ui/button";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

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
