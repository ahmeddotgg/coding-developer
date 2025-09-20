"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import type z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignInSchema, SignUpSchema } from "@/lib/schema";

type SignInFormData = z.infer<typeof SignInSchema>;
type SignUpFormData = z.infer<typeof SignUpSchema>;

function SignInForm() {
  const form = useForm<SignInFormData>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: SignInFormData) {
    console.log("Sign in:", { data });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-lg space-y-6 rounded-xl border p-6"
      >
        <h1 className="font-bold text-2xl">سجل الدخول لحسابك</h1>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>البريد</FormLabel>
              <FormControl>
                <Input type="email" placeholder="m@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>كلمة المرور</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>

        <p className="text-center text-sm">
          ليس لديك حساب؟{" "}
          <Link href="/sign-up" className="underline underline-offset-4">
            انشئ حساب
          </Link>
        </p>
      </form>
    </Form>
  );
}

function SignUpForm() {
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: SignUpFormData) {
    console.log("Sign in:", data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-lg space-y-6 rounded-xl border p-6"
      >
        <h1 className="font-bold text-2xl">انشئ حساب جديد</h1>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>البريد</FormLabel>
              <FormControl>
                <Input type="email" placeholder="m@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>اسم المستخدم</FormLabel>
              <FormControl>
                <Input placeholder="example" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>كلمة المرور</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>تاكيد كلمة السر</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>

        <p className="text-center text-sm">
          لديك حساب بالفعل؟{" "}
          <Link href="/sign-in" className="underline underline-offset-4">
            سجل الدخول
          </Link>
        </p>
      </form>
    </Form>
  );
}

export function AuthForm({ mode }: { mode: "sign-in" | "sign-up" }) {
  if (mode === "sign-in") {
    return <SignInForm />;
  }
  return <SignUpForm />;
}
