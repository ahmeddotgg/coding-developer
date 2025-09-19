import { NextResponse } from "next/server";

export async function GET() {
  const diplomas = [
    {
      id: 1,
      title: "دبلومة Full Stack Laravel",
      description:
        "دبلومة شاملة تشمل أساسيات الـ Frontend (HTML, CSS, JS, React) والـ Backend (PHP, MySQL, Laravel 12) مع مشاريع عملية ونشر على الاستضافة.",
      price: 7500,
      discountPrice: 5000,
      duration: "5 شهور + شهرين تدريب مجاني",
      category: "Full Stack",
      image: "/cources-images/laravel.png",
    },
    {
      id: 2,
      title: "دبلومة Full Stack .NET",
      description:
        "تعلّم تطوير تطبيقات كاملة باستخدام تقنيات .NET من الواجهة الأمامية (HTML, CSS, Angular, TypeScript) إلى الخلفية (C#, SQL, ASP.NET, MVC, API).",
      price: 9000,
      discountPrice: 7500,
      duration: "5 شهور + شهرين تدريب مجاني",
      category: "Full Stack",
      image: "/cources-images/dotnet.png",
    },
  ];
  return NextResponse.json(diplomas);
}
