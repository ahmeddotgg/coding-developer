"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner"; // or your preferred toast library
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // adjust imports to your components
import { Textarea } from "@/components/ui/textarea";
import { handleWeb3FormSubmission } from "../contact-us/action";

const initialState = {
  success: false,
  error: null,
};

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    handleWeb3FormSubmission,
    initialState,
  );

  console.log(state);

  useEffect(() => {
    if (state.success) {
      toast.success("تم الإرسال بنجاح!");
    } else if (state.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <form action={formAction} className="space-y-3">
      <Input
        className="bg-background"
        type="text"
        placeholder="Name"
        required
        maxLength={40}
        minLength={2}
        name="name"
      />
      <Input
        className="bg-background"
        type="email"
        placeholder="Email"
        required
        maxLength={40}
        minLength={2}
        name="email"
      />
      <Textarea
        className="h-32 resize-none bg-background"
        placeholder="Your message"
        required
        minLength={8}
        maxLength={300}
        name="message"
      />
      <Button type="submit" disabled={pending}>
        ارسل
      </Button>
    </form>
  );
}
