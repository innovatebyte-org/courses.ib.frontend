import { IBTutorIcon } from "@/assets/icons";
import { Course } from "@/types/api";
import { CourseCard } from "@/ui/course-card";
import Link from "next/link";

type TCourseList = {
  courses: Array<Course>;
};

export const CourseList = ({ courses }: TCourseList) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-3">
      {courses.map((course) => (
        <Link href={`/courses/${course.slug}`} key={course._id}>
          <CourseCard>
            <CourseCard.Heading
              coverImage={course.previewImage}
              tutor={{ name: "InnovateByte experts", image: <IBTutorIcon /> }}
            />
            <CourseCard.Content>
              <CourseCard.Rate
                rate={course.rating}
                level={
                  course.level.toLowerCase() as
                    | "beginner"
                    | "intermediate"
                    | "expert"
                }
              />
              <CourseCard.Title title={course.title} />
              <CourseCard.Info
                noOfModules={course.modules.length}
                hours={14}
                category={course.category}
              />
              <CourseCard.Price price={course.price} />
            </CourseCard.Content>
          </CourseCard>
        </Link>
      ))}
    </div>
  );
};
