import React from "react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { Checkbox } from "~/components/ui/checkbox";
import Link from "next/link";

const RegisterPages = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader className="items-center">
          <CardTitle>Buat Akun</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  placeholder="Masukkan email anda"
                  name="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  placeholder="Masukkan password anda"
                  name="password"
                />
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Show password
                  </label>
                </div>
              </div>
              <Button className="mt-3 w-full bg-primary">Daftar</Button>
            </div>
          </form>
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
          <p className="text-xs">Apakah kamu sudah memiliki akun?, <Link href={"#"} className="font-semibold text-primary ">Login</Link></p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterPages;
