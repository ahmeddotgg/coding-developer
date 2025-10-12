import * as z from "zod";
import { stripHtml } from "./utils";

// auth schema
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
// auth schema

// product form schema
export const ProductFormSchema = z
  .object({
    title: z.string().min(10, "اسم المنتج مطلوب"),
    description: z
      .string()
      .refine(
        (val) => stripHtml(val).length >= 100,
        "وصف المنتج يجب أن يكون على الأقل 100 حرف",
      ),
    duration: z.string().min(1, "المدة مطلوبة"),
    category: z.string().min(1, "القسم مطلوب"),
    price: z.coerce
      .number<number>({ error: "السعر مطلوب" })
      .positive("السعر يجب أن يكون رقماً موجباً"),
    discount: z.coerce.number<number>().optional(),
    image: z
      .array(z.custom<File>())
      .min(1, "يرجى اختيار صورة")
      .max(1, "يرجى اختيار صورة واحدة فقط")
      .refine((files) => files.every((file) => file.size <= 5 * 1024 * 1024), {
        message: "حجم الملف يجب أن يكون أقل من 5 ميجابايت",
        path: ["image"],
      }),
    type: z.enum(["دورة", "دبلومة"], { error: "يجب اختيار نوع المنتج" }),
  })
  .refine(
    (data) => {
      if (!data.discount) return true;
      if (data.discount === 0) return true;
      return data.discount > 0 && data.discount <= data.price;
    },
    {
      message: "الخصم يجب أن يكون رقماً موجباً وأقل من أو يساوي السعر",
      path: ["discount"],
    },
  );
// product form schema
