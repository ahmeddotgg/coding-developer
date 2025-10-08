import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconPhone,
} from "@tabler/icons-react";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import { ContactForm } from "../_components/contact-form";

export const metadata: Metadata = {
  title: "تواصل معنا",
};

export default function ContactUs() {
  return (
    <div className="container space-y-18">
      <h1 className="text-center font-bold text-4xl">تواصل معنا</h1>

      <div className="space-y-4">
        <section className="grid grid-cols-1 gap-4 min-[680]:grid-cols-2">
          <div className="space-y-4 rounded-lg bg-primary/10 p-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <svg viewBox="0 0 142 139" className="size-12 fill-blue-950">
                  <path d="M92,6.9l35.2,25.7c12.6,9.2,17.8,25.4,13,40.2l-13.4,41.5C122,129,108.3,139,92.7,139H49.2 c-15.5,0-29.3-10-34.1-24.8L1.8,72.7c-4.8-14.8,0.4-31,13-40.2L50,6.9C62.5-2.3,79.5-2.3,92,6.9z" />
                </svg>
                <MapPin className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 text-background" />
              </div>
              <span className="font-semibold text-2xl">زور فرعنا</span>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214.91915555089915!2d31.181716701116052!3d30.472750560359433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7df37980bbb81%3A0x3aad5282fd7aa6a6!2z2LTYsdmD2KkgQ29kaW5nIERldmVsb3BlciDZhNmE2KjYsdmF2KzZitin2Ko!5e0!3m2!1sen!2seg!4v1758831014902!5m2!1sen!2seg"
              loading="lazy"
              title="Location"
              className="h-72 w-full rounded-md md:h-80"
            />
          </div>
          <div className="space-y-4 rounded-lg bg-primary/10 p-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <svg viewBox="0 0 142 139" className="size-12 fill-blue-950">
                  <path d="M92,6.9l35.2,25.7c12.6,9.2,17.8,25.4,13,40.2l-13.4,41.5C122,129,108.3,139,92.7,139H49.2 c-15.5,0-29.3-10-34.1-24.8L1.8,72.7c-4.8-14.8,0.4-31,13-40.2L50,6.9C62.5-2.3,79.5-2.3,92,6.9z" />
                </svg>
                <Mail className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 text-background" />
              </div>
              <span className="font-semibold text-2xl">ارسل رسالة</span>
            </div>
            <ContactForm />
          </div>
        </section>

        <section className="flex flex-col gap-4 min-[450px]:flex-row">
          <div className="w-full space-y-4 rounded-lg bg-primary/10 p-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <svg viewBox="0 0 142 139" className="size-12 fill-blue-950">
                  <path d="M92,6.9l35.2,25.7c12.6,9.2,17.8,25.4,13,40.2l-13.4,41.5C122,129,108.3,139,92.7,139H49.2 c-15.5,0-29.3-10-34.1-24.8L1.8,72.7c-4.8-14.8,0.4-31,13-40.2L50,6.9C62.5-2.3,79.5-2.3,92,6.9z" />
                </svg>
                <Phone className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 text-background" />
              </div>
              <span className="font-semibold text-2xl">اتصل بنا</span>
            </div>
            <div className="space-y-3 p-4">
              <a
                href="https://api.whatsapp.com/send?phone=201025747690"
                target="_blank"
                rel="noopener"
                className="flex w-fit items-center gap-2"
              >
                <IconBrandWhatsapp />
                01025747690
              </a>
              <p className="flex items-center gap-2">
                <IconPhone />
                01207039877
              </p>
            </div>
          </div>
          <div className="w-full space-y-4 rounded-lg bg-primary/10 p-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <svg viewBox="0 0 142 139" className="size-12 fill-blue-950">
                  <path d="M92,6.9l35.2,25.7c12.6,9.2,17.8,25.4,13,40.2l-13.4,41.5C122,129,108.3,139,92.7,139H49.2 c-15.5,0-29.3-10-34.1-24.8L1.8,72.7c-4.8-14.8,0.4-31,13-40.2L50,6.9C62.5-2.3,79.5-2.3,92,6.9z" />
                </svg>
                <Globe className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 text-background" />
              </div>
              <span className="font-semibold text-2xl">تابعنا</span>
            </div>
            <div className="space-y-3 p-4 [&>a]:w-fit">
              <a
                href="https://www.facebook.com/profile.php?id=100084642465611"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2"
              >
                <IconBrandFacebook />
                Facbook
              </a>
              <a
                href="https://eg.linkedin.com/company/coding-developer238"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2"
              >
                <IconBrandLinkedin />
                Linkedin
              </a>
              <a
                href="https://www.instagram.com/codingacademydeveloper/"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2"
              >
                <IconBrandInstagram />
                Instagram
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
