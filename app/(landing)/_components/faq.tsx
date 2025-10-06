import {
  Award,
  Clock,
  Code2,
  Gamepad2,
  type LucideIcon,
  School,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  id: string;
  question: string;
  answer: [{ item_1: string; item_2?: string; item_3?: string }];
  intro: string;
  icon: LucideIcon;
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
    question: "1. ما هي طبيعة الكورسات التي تقدمونها؟",
    intro: "استكشف برامجنا التدريبية المتنوعة",
    answer: [
      {
        item_1:
          "نقدم كورسات متنوعة تشمل: أساسيات البرمجة، تطوير الويب (Front-End و Back-End)، تطوير تطبيقات الموبايل، إضافة إلى كورسات خاصة للأطفال لتعليم البرمجة بطريقة ممتعة وتفاعلية.",
      },
    ],
    icon: Code2,
  },
  {
    id: "courses-types",
    question: "2. هل الكورسات عملية أم نظرية فقط؟",
    intro: "ابدأ رحلتك التعليمية معنا اليوم",
    answer: [
      {
        item_1:
          "كورساتنا تركّز بشكل كبير على التدريب العملي. الطالب بيشتغل على مشاريع حقيقية + تدريبات بعد الكورس تساعده يبني CV و Portfolio قوي.",
      },
    ],
    icon: School,
  },
  {
    id: "courses-duration",
    question: "3. ما هي مدة الكورسات والدبلومات؟",
    intro: "ابدأ رحلتك التعليمية معنا اليوم",
    answer: [
      {
        item_1: "الكورسات القصيرة: من شهرين إلى 3 شهور.",
        item_2:
          "الدبلومات الكاملة (مثل Full Stack Laravel أو .NET): 5 شهور + شهرين تدريب مجاني.",
        item_3: "كورسات الأطفال: 4 مستويات، مدتها شهرين + شهرين تدريب مجاني.",
      },
    ],
    icon: Clock,
  },
  {
    id: "certificates",
    question: "4. هل يوجد شهادات معتمدة بعد انتهاء الكورس؟",
    intro: "احصل على شهادات تعزز مسيرتك المهنية",
    answer: [
      {
        item_1: "شهادة إتمام معتمدة من الشركة.",
        item_2: "شهادة خبرة وتدريب داخلي (للدبلومات).",
        item_3: "تقرير تقني بالمشاريع التي قمت بتنفيذها.",
      },
    ],
    icon: Award,
  },
  {
    id: "kids-courses",
    question: "5. ما هي طريقة التعلم للأطفال؟",
    intro: "علم اطفالك المهن المستقبلية",
    answer: [
      {
        item_1:
          "الأطفال يتعلموا من خلال Scratch Jr و Scratch (بناء ألعاب وقصص تفاعلية)، ثم أساسيات تصميم المواقع، وأخيرًا مشروع تخرج يعرضوه على الأهل أو الفريق مع شهادة ومكافأة تحفيزية.",
      },
    ],
    icon: Gamepad2,
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
                {faq.answer.map((item) => (
                  <ul
                    key={item.item_1}
                    className="list-disc space-y-2 px-6 text-foreground leading-relaxed"
                  >
                    <li>{item.item_1}</li>
                    {item.item_2 && <li>{item.item_2}</li>}
                    {item.item_3 && <li>{item.item_3}</li>}
                  </ul>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
