import type { Metadata } from "next";
import { AuthForm } from "../_components/auth-form";

export const metadata: Metadata = {
  title: "تسجل دخول",
};

export default function SigninPage() {
  return <AuthForm mode="sign-in" />;
}
