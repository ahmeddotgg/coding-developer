import z from "zod";

export const SignInSchema = z.object({
  email: z.email({ error: "البريد الإلكتروني غير صالح" }),
  password: z
    .string()
    .min(8, { error: "كلمة المرور يجب أن تكون 8 أحرف على الأقل" }),
});

export const SignUpSchema = z
  .object({
    email: z.email({ error: "البريد الإلكتروني غير صالح" }),
    username: z.string().min(2, {
      error: "اسم المستخدم يجب أن يحتوي على حرفين على الأقل",
    }),
    password: z
      .string()
      .min(8, { error: "كلمة المرور يجب أن تكون 8 أحرف على الأقل" }),
    confirmPassword: z.string().min(1, { message: "يجب تأكيد كلمة المرور" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "كلمات المرور غير متطابقة",
    path: ["confirmPassword"],
  });
