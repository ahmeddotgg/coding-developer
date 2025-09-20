import type { Metadata } from "next";
import { AuthForm } from "../_components/auth-form";

export const metadata: Metadata = {
  title: "انشئ حساب",
};

export default function SignupPage() {
  return <AuthForm mode="sign-up" />;
}
