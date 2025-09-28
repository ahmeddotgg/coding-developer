import CourseCard from "./card";
import { courses } from "./data";

export const NewCources = async () => {
  return (
    <div className="container space-y-16 py-22">
      <h2 className="text-center font-bold text-4xl">اجدد الدورات</h2>
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
};
