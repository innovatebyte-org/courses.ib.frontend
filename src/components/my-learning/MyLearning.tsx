import { Course } from "@/types/api";
import { CourseList } from "../courses/CourseList";

type TMyLearning = {
  courses: Array<Course>;
};

export const MyLearningPage = ({ courses }: TMyLearning) => {
  if (courses.length === 0) {
    return <div>No Courses. Purchase a course to begin your tech journey.</div>;
  }
  return (
    <div>
      <CourseList courses={courses} />
    </div>
  );
};
