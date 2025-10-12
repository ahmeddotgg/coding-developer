"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CloudUpload, X } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadItem,
  FileUploadItemDelete,
  FileUploadItemMetadata,
  FileUploadItemPreview,
  FileUploadList,
  FileUploadTrigger,
} from "@/components/ui/file-upload";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Editor } from "./editor";

const DescritionContent = `
    <h2>
      Hi there,
    </h2>
    <p>
      this is a basic <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
    </p>
    <ul>
      <li>
        That’s a bullet list with one…
      </li>
      <li>
        …or two list items.
      </li>
    </ul>
    <p>
      I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
    </p>
    <blockquote>
      Wow, that’s amazing. Good work, boy! 👏
      <br />
      — Mom
    </blockquote>
  `;

const ProductFormSchema = z.object({
  title: z.string().min(1, "اسم المنتج مطلوب"),
  description: z.string().min(100, "وصف المنتج يجب أن يكون على الأقل 100 أحرف"),
  duration: z.string().min(1, "المدة مطلوبة"),
  category: z.string().min(1, "القسم مطلوب"),
  price: z.coerce
    .number<number>({ error: "السعر مطلوب" })
    .positive("السعر يجب أن يكون رقماً موجباً"),
  image: z
    .array(z.custom<File>())
    .min(1, "يرجى اختيار صورة")
    .max(1, "يرجى اختيار صورة واحدة فقط")
    .refine((files) => files.every((file) => file.size <= 5 * 1024 * 1024), {
      message: "حجم الملف يجب أن يكون أقل من 5 ميجابايت",
      path: ["image"],
    }),
});

type ProductFormValues = z.infer<typeof ProductFormSchema>;

export function ProductForm() {
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(ProductFormSchema),
    defaultValues: {
      title: "",
      description: DescritionContent,
      price: undefined,
      duration: "",
      category: "",
      image: [],
    },
  });

  function onSubmit(values: ProductFormValues) {
    const product = { ...values, id: Date.now() };
    console.log(product);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FieldGroup>
        <Controller
          name="title"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="title">Product Title</FieldLabel>
              <Input {...field} id="title" aria-invalid={fieldState.invalid} />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="description"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="description">Product Description</FieldLabel>
              <Editor
                invalid={fieldState.invalid}
                content={field.value}
                onChange={(value: string) => field.onChange(value)}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="price"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="price">Product Price</FieldLabel>
              <Input
                {...field}
                id="price"
                type="number"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="duration"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="duration">Product Duration</FieldLabel>
              <Input
                {...field}
                id="duration"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="category"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="image">القسم</FieldLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                dir="rtl"
              >
                <SelectTrigger aria-invalid={fieldState.invalid}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Fundementals">Fundementals</SelectItem>
                  <SelectItem value="Fullstack">Fullstack</SelectItem>
                  <SelectItem value="Frontend">Frontend</SelectItem>
                  <SelectItem value="Backend">Backend</SelectItem>
                  <SelectItem value="Kids">Kids</SelectItem>
                </SelectContent>
              </Select>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="image"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="image">الغلاف</FieldLabel>
              <FileUpload
                value={field.value}
                onValueChange={field.onChange}
                accept="image/*"
                maxFiles={2}
                maxSize={5 * 1024 * 1024}
                onFileReject={(_, message) => {
                  form.setError("image", { message });
                }}
              >
                <FileUploadDropzone
                  dir="rtl"
                  className="flex-row flex-wrap border-dotted text-center"
                >
                  <CloudUpload className="size-4" />
                  اسحب الملف او
                  <FileUploadTrigger asChild>
                    <Button variant="link" size="sm" className="p-0">
                      اختار من الملفات
                    </Button>
                  </FileUploadTrigger>
                </FileUploadDropzone>
                <FileUploadList>
                  {field.value.map((file, index) => (
                    <FileUploadItem key={index} value={file}>
                      <FileUploadItemPreview />
                      <FileUploadItemMetadata />
                      <FileUploadItemDelete asChild>
                        <Button variant="ghost" size="icon" className="size-7">
                          <X />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </FileUploadItemDelete>
                    </FileUploadItem>
                  ))}
                </FileUploadList>
              </FileUpload>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      <Button type="submit" disabled={!form.formState.isDirty}>
        Create Product
      </Button>
    </form>
  );
}
