import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Form } from "~/components/ui/form";
import RegisterFormInner from "../components/RegisterFormInner";
import { registerFormSchema, type RegisterFormSchema } from "../forms/register";
import { api } from "~/utils/api";
import { toast } from "sonner";

const RegisterPages = () => {
  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  });

  const { mutate: registerUser, isPending } = api.auth.register.useMutation({
    onSuccess : () => {
      toast.success("Register Berhasil")
    },
    onError : () => {
      toast.error("Register Gagal")
    }
  });
  const hendleRegisterSubmit = (values: RegisterFormSchema) => {
    registerUser(values);
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Card className="w-[400px]">
        <CardHeader className="items-center pb-10">
          <CardTitle className="text-3xl font-bold">Buat Akun</CardTitle>
          <CardDescription className="flex max-w-72 text-center text-xs">
            Q&A Dengan creator favoritmu lebih mudah
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <RegisterFormInner onRegisterSubmit={hendleRegisterSubmit} isLoading={isPending} />
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col gap-5">
          <div className="flex w-full items-center justify-between">
            <div className="h-[2px] w-full border-t-2" />
            <p className="flex-1 text-nowrap px-2 text-[11px] text-muted-foreground">
              Atau lanjut dengan Google
            </p>
            <div className="h-[2px] w-full border-t-2" />
          </div>
          <Button size={"lg"} variant={"secondary"} className="w-full">
            <FcGoogle /> Daftar dengan Google
          </Button>
          <p className="text-xs">
            Apakah kamu sudah memiliki akun?,{" "}
            <Link href={"#"} className="font-semibold text-primary">
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterPages;
