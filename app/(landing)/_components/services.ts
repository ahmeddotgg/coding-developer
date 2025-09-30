import {
  Code,
  Gamepad,
  type LucideIcon,
  Paintbrush,
  Palette,
  TabletSmartphone,
} from "lucide-react";

export const services: {
  id: string;
  icon: LucideIcon;
  title: string;
  subTitle: string;
  img: string;
  description: string[];
}[] = [
  {
    id: "web-development",
    icon: Code,
    img: "/services-images/web-development.png",
    title: "البرمجة وتطوير الويب",
    subTitle:
      "تعلم أساسيات البرمجة والتطوير الحديث للويب باستخدام أحدث التقنيات والأدوات. نقدم دورات شاملة في JavaScript و React وغيرها من التقنيات الأساسية لبناء تطبيقات ويب احترافية.",
    description: [
      "تعلم JavaScript من الصفر إلى الاحتراف",
      "إتقان React و Vue.js",
      "بناء تطبيقات Full Stack",
      "مشاريع عملية واقعية",
    ],
  },
  {
    id: "web-design",
    icon: Palette,
    img: "/services-images/web-design.png",
    title: "تصميم المواقع الإلكترونية",
    subTitle:
      "أتقن فن تصميم المواقع الإلكترونية الحديثة والجذابة. تعلم كيفية إنشاء تصاميم احترافية باستخدام Figma و Adobe XD، وتحويل التصاميم إلى مواقع ويب تفاعلية باستخدام HTML و CSS.",
    description: [
      "أساسيات التصميم الجرافيكي",
      "استخدام Figma و Adobe XD",
      "تصميم متجاوب للجوال",
      "تجربة المستخدم (UX)",
    ],
  },
  {
    id: "mobile-development",
    icon: TabletSmartphone,
    img: "/services-images/mobile-development.png",
    title: "تطوير تطبيقات الجوال",
    subTitle:
      "ادخل عالم تطوير التطبيقات المحمولة واصنع تطبيقات iOS و Android احترافية. تعلم React Native و Flutter وابدأ في بناء تطبيقات عملية يستخدمها الملايين حول العالم.",
    description: [
      "تطوير بـ React Native",
      "إنشاء تطبيقات iOS و Android",
      "ربط التطبيقات بقواعد البيانات",
      "نشر التطبيقات في المتاجر",
    ],
  },
  {
    id: "ui-ux",
    icon: Paintbrush,
    img: "/services-images/ui-ux.png",
    title: "تصميم واجهات المستخدم (UI/UX)",
    subTitle:
      "تعلم فنون تصميم تجربة وواجهة المستخدم لإنشاء منتجات رقمية سهلة الاستخدام وجذابة. اكتسب المهارات اللازمة لإجراء بحوث المستخدمين وإنشاء نماذج أولية تفاعلية.",
    description: [
      "مبادئ UI/UX الحديثة",
      "بحوث وتحليل المستخدمين",
      "إنشاء Prototypes تفاعلية",
      "اختبار قابلية الاستخدام",
    ],
  },
  {
    id: "kids-programing",
    icon: Gamepad,
    img: "/services-images/kids-programing.png",
    title: "دورات البرمجة للأطفال",
    subTitle:
      "نساعد أطفالك على اكتشاف عالم التكنولوجيا والبرمجة بطريقة ممتعة وتفاعلية. من خلال ألعاب وأنشطة تعليمية مبتكرة، يتعلم الأطفال أساسيات البرمجة والتفكير المنطقي بأسلوب يناسب أعمارهم.",
    description: [
      "برمجة بلغات مبسطة للأطفال",
      "تطوير الألعاب والتطبيقات",
      "تنمية مهارات التفكير المنطقي",
      "بيئة تعليمية آمنة وممتعة",
    ],
  },
];
