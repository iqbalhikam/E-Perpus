import React, { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { Checkbox } from "~/components/ui/checkbox";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { useForm } from "react-hook-form";
import { registerFormSchema, type RegisterFormSchema } from "../forms/register";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterPages = () => {
  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  });
  const onRegisterSubmit = (values: RegisterFormSchema) => {
    alert("Register Success");
  };
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Card className="w-[400px]">
        <CardHeader className="items-center">
          <CardTitle className="text-3xl font-bold">Buat Akun</CardTitle>
          <CardDescription className="flex text-center text-xs max-w-72">ePerpus mempermudah anda dalam mencari buku</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onRegisterSubmit)}
              className="flex flex-col gap-y-1"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1">
                    <FormLabel>Nama</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Masukkan name anda" {...field} />
                    </FormControl>
                    <div className="h-0 w-full justify-end bg-primary flex items-center">
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Masukkan email anda" {...field} />
                    </FormControl>
                    <div className="h-0 w-full justify-end bg-primary flex items-center">
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Masukkan password anda"
                        {...field}
                      />
                    </FormControl>
                    <div className="h-0 w-full justify-end bg-primary flex items-center">
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <label
                htmlFor="terms"
                className="flex items-center gap-2 text-sm font-medium leading-none text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {" "}
                <Checkbox
                  checked={showPassword}
                  onCheckedChange={(checked) => setShowPassword(!!checked)}
                  id="terms"
                  className="border-muted-foreground hover:border-primary hover:bg-primary/20"
                />
                Show password
              </label>
              <Button className="mt-3 w-full bg-primary">Daftar</Button>
            </form>
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
          <Button variant={"secondary"} className="w-full">
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
