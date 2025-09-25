import { courses } from "../../_components/data";

export default async function CourcePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = courses.find((c) => c.id === Number(id));

  if (!course) return "Not Found";

  return (
    <div className="container space-y-8">
      <h1 className="font-bold text-4xl">{course?.title}</h1>
      <p>تفاصيل الدورة:</p>
      <p>{course.description}</p>
    </div>
  );
}
