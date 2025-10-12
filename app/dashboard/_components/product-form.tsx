"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CloudUpload, X } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
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
import { ProductFormSchema } from "@/lib/schema";
import type { ProductFormValues } from "@/lib/types";
import { useEditorStore } from "@/store/editor-store";
import { useProductStore } from "@/store/products-store";
import { TipTapEditor } from "./editor";

export function ProductForm() {
  const { addProduct } = useProductStore();
  const { editor } = useEditorStore();

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(ProductFormSchema),
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      discount: 0,
      duration: "",
      category: "",
      image: [],
    },
  });

  async function onSubmit(values: ProductFormValues) {
    try {
      await addProduct(values);
      form.reset();
      editor?.destroy();
      console.log("submitted successful");
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <FieldGroup>
        <div className="grid grid-cols-1 gap-x-2 gap-y-8 md:space-y-0 lg:grid-cols-3 min-[370px]:grid-cols-2">
          <Controller
            name="title"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                className="lg:col-span-1 min-[370px]:col-span-2"
              >
                <FieldLabel htmlFor="title">اسم المنتج</FieldLabel>
                <Input
                  {...field}
                  id="title"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="price"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="price">سعر المنتج</FieldLabel>
                <Input
                  {...field}
                  id="price"
                  type="number"
                  aria-invalid={fieldState.invalid}
                  placeholder={`"5000"`}
                  value={field.value === 0 ? "" : field.value}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="discount"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="discount">
                  السعر بعد الخصم (اختياري)
                </FieldLabel>
                <Input
                  {...field}
                  id="discount"
                  type="number"
                  aria-invalid={fieldState.invalid}
                  placeholder={`"3000"`}
                  value={field.value === 0 ? "" : field.value}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        <Controller
          name="description"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field
              data-invalid={fieldState.invalid}
              className="data-[invalid=true]:text-current data-[invalid=true]:[&>label]:text-destructive"
            >
              <FieldLabel htmlFor="description">وصف المنتج</FieldLabel>
              <TipTapEditor
                invalid={fieldState.invalid}
                content={field.value}
                onChange={field.onChange}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <div className="grid grid-cols-1 gap-x-2 gap-y-8 md:space-y-0 lg:grid-cols-3 min-[370px]:grid-cols-2">
          <Controller
            name="duration"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                className="lg:col-span-1 min-[370px]:col-span-2"
              >
                <FieldLabel htmlFor="duration">مدة المنتج</FieldLabel>
                <Input
                  {...field}
                  id="duration"
                  aria-invalid={fieldState.invalid}
                  placeholder={`"3 شهور"`}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="category"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="category">القسم</FieldLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  dir="rtl"
                >
                  <SelectTrigger aria-invalid={fieldState.invalid}>
                    <SelectValue placeholder={`"Web Development"`} />
                  </SelectTrigger>
                  <SelectContent dir="ltr">
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="Fundementals">Fundementals</SelectItem>
                    <SelectItem value="Fullstack">Fullstack</SelectItem>
                    <SelectItem value="Frontend">Frontend</SelectItem>
                    <SelectItem value="Backend">Backend</SelectItem>
                    <SelectItem value="Kids">Kids</SelectItem>
                  </SelectContent>
                </Select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="type"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="discount">نوع المنتج</FieldLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  dir="rtl"
                >
                  <SelectTrigger aria-invalid={fieldState.invalid}>
                    <SelectValue placeholder={`"دبلومة"`} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="دورة">دورة</SelectItem>
                    <SelectItem value="دبلومة">دبلومة</SelectItem>
                  </SelectContent>
                </Select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

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

      <Button
        type="submit"
        className="w-full"
        disabled={!form.formState.isDirty || form.formState.isSubmitting}
      >
        تأكيد
      </Button>
    </form>
  );
}
