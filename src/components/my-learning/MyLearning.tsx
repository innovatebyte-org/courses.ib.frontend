import { Course } from "@/types/api";

type TMyLearning = {
  courses: Array<Course>;
};

export const MyLearningPage = ({ courses }: TMyLearning) => {
  if (courses.length === 0) {
    return <div>No Courses. Purchase a course to begin your tech journey.</div>;
  }
  return (
    <div>
      {courses.map((course) => (
        <div key={course._id}>{course.title}</div>
      ))}
    </div>
  );
};
