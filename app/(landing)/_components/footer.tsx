import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return <Footer01 />;
};

export default function Footer01() {
  return (
    <footer className="container mt-20 grid items-center gap-4 rounded-t-lg bg-primary/10 py-10 sm:p-10 md:grid-cols-2">
      <div className="space-y-6">
        <Image
          src="/GPTlogo.svg"
          alt="logo"
          width={90}
          height={50}
          priority
          style={{ height: "auto" }}
        />
        <p className="max-w-[40ch] text-balance text-muted-foreground">
          خطوتك نحو المستقبل تبدأ هنا: تعلم تطوير الويب، الموبايل، والبرمجة
          الحديثة بأسلوب ممتع واحترافي، كورسات و تدريبات عملية وجهاً لوجه مع
          خبراء في مجال تطوير البرمجيات.
        </p>
      </div>
      <div className="space-y-4 md:justify-self-end">
        <h2 className="font-semibold text-lg">روابط سريعة</h2>
        <ul className="flex flex-col items-start gap-4 text-muted-foreground [&>a]:transition-colors [&>a]:hover:text-primary [&>a]:hover:underline">
          <Link href="/">الرئيسية</Link>
          <Link href="/courses">الدورات</Link>
          <Link href="/diplomas">الدبلومات</Link>
          <Link href="/contact-us">تواصل معنا</Link>
        </ul>
      </div>
    </footer>
  );
}
