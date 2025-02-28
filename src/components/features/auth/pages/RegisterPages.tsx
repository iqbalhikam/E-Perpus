import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

const RegisterPages = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Card className="w-[400px]">
        <CardHeader className="items-center">
          <CardTitle>Buat Akun</CardTitle>
        </CardHeader>
        <CardContent>
          <form action="">
            <div className="flex flex-col gap-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  placeholder="Masukkan email anda"
                  name="email"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  placeholder="Masukkan password anda"
                  name="password"
                />
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPages;
