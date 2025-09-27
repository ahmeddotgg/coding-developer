import {
  type Icon,
  IconAward,
  IconCode,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  intro: string;
  icon: Icon;
}

export const Faq = () => {
  return (
    <section className="container space-y-12 py-22">
      <h2 className="text-center font-bold text-4xl">الأسئلة الشائعة</h2>
      <AcademyAccordion />
    </section>
  );
};

const faqData: FAQItem[] = [
  {
    id: "courses-offered",
    question: "ما هي الدورات المتاحة في الأكاديمية؟",
    intro: "استكشف برامجنا التدريبية المتنوعة",
    answer:
      "نقدم مجموعة واسعة من الدورات التي تشمل: تطوير الويب (HTML, CSS, JavaScript, React, Node.js)، تطوير التطبيقات المحمولة (React Native, Flutter)، علوم البيانات والذكاء الاصطناعي (Python, Machine Learning)، تطوير الألعاب (Unity, C#)، والأمن السيبراني. كل دورة مصممة لتناسب مستويات مختلفة من المبتدئين إلى المتقدمين.",
    icon: IconCode,
  },
  {
    id: "certificates",
    question: "هل تقدم الأكاديمية شهادات معتمدة؟",
    intro: "احصل على شهادات تعزز مسيرتك المهنية",
    answer:
      "نعم، نقدم شهادات إتمام معتمدة لجميع دوراتنا. هذه الشهادات معترف بها من قبل العديد من الشركات في المنطقة. بالإضافة إلى ذلك، نساعد الطلاب في الحصول على شهادات دولية مثل شهادات Microsoft وGoogle وAWS من خلال برامج التحضير المتخصصة. كما نقدم مشاريع تخرج حقيقية يمكن للطلاب إضافتها إلى محافظهم المهنية.",
    icon: IconAward,
  },
  {
    id: "registration-contact",
    question: "كيف يمكنني التسجيل والتواصل معكم؟",
    intro: "ابدأ رحلتك التعليمية معنا اليوم",
    answer:
      "يمكنك التسجيل من خلال زيارة موقعنا الإلكتروني أو زيارة الأكاديمية شخصياً. نقدم استشارات مجانية لمساعدتك في اختيار الدورة المناسبة. للتواصل: هاتف 123-456-7890، بريد إلكتروني info@codingacademy.com، أو زيارتنا في شارع التقنية 123. فريق الاستقبال متاح من السبت إلى الخميس من 9:00 صباحاً إلى 8:00 مساءً لمساعدتك في جميع استفساراتك.",
    icon: IconPhone,
  },
  {
    id: "support-resources",
    question: "ما هي الموارد والدعم المتاح للطلاب؟",
    intro: "دعم شامل لضمان نجاحك",
    answer:
      "نقدم دعماً شاملاً يشمل: مواد تعليمية رقمية حصرية، منصة تعلم إلكترونية متاحة 24/7، جلسات دعم إضافية مجانية، مجتمع طلابي نشط للتواصل والمساعدة المتبادلة، ورش عمل شهرية مع خبراء الصناعة، وخدمات التوجيه المهني وكتابة السيرة الذاتية. كما نوفر مكتبة ضخمة من الكتب والموارد التقنية المجانية لجميع الطلاب.",
    icon: IconMail,
  },
];

function AcademyAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="mx-auto max-w-2xl space-y-3"
    >
      {faqData.map((faq) => {
        return (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className="overflow-hidden rounded-xl border-2 border-border/50 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md"
          >
            <AccordionTrigger className="group px-6 py-5 hover:no-underline">
              <div className="flex w-full items-center gap-4 text-right">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-b from-primary to-blue-400 text-background shadow-md transition-transform duration-200 group-hover:scale-105">
                  {faq.icon && <faq.icon />}
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 font-semibold text-foreground text-lg transition-colors group-hover:text-primary">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-sm">{faq.intro}</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="max-w-[60ch] px-6 pb-6">
              <div className="border-border/30 border-t pt-2">
                <p className="text-right text-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
