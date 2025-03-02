import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { useFormContext } from "react-hook-form";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { type RegisterFormSchema } from "../forms/register";
import { useState } from "react";

type RegisterFormInnerProps = {
  onRegisterSubmit: (values: RegisterFormSchema) => void;
};
const RegisterFormInner = (props: RegisterFormInnerProps) => {
  const form = useFormContext<RegisterFormSchema>();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <form
      onSubmit={form.handleSubmit(props.onRegisterSubmit)}
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
            <div className="flex h-0 w-full items-center justify-end bg-primary">
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
              <Input
                type="email"
                placeholder="Masukkan email anda"
                {...field}
              />
            </FormControl>
            <div className="flex h-0 w-full items-center justify-end bg-primary">
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
                placeholder="Masukkan password"
                {...field}
              />
            </FormControl>
            <div className="flex h-0 w-full items-center justify-end pb-3">
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
      <label
        htmlFor="terms"
        className="flex items-center gap-2 text-sm font-medium leading-none text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
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
  );
};

export default RegisterFormInner;
