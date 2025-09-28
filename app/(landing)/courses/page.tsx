import type { Metadata } from "next";
import CourseCard from "../_components/card";
import { courses } from "../_components/data";

export const metadata: Metadata = {
  title: "الدورات",
};

export default function CoursesPage() {
  return (
    <div className="container">
      <div className="grid auto-rows-fr grid-cols-1 gap-4 lg:grid-cols-3 min-[630px]:grid-cols-2">
        {courses.map(
          ({ id, category, description, duration, image, title }) => (
            <CourseCard
              id={id}
              category={category}
              description={description}
              duration={duration}
              image={image}
              title={title}
              key={id}
              type="course"
            />
          ),
        )}
      </div>
    </div>
  );
}
