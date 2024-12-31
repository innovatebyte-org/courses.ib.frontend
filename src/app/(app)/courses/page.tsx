import { IBTutorIcon } from "@/assets/icons";
import { CourseList } from "@/components/courses/CourseList";
import { getAllCourses } from "@/services/courses";

const Courses = async () => {
  const courses = await getAllCourses();
  return (
    <div className="w-full px-5 lg:px-20">
      <h3 className="text-ib-accent-100 text-body-1-sb">All Courses</h3>
      <CourseList courses={courses} />
    </div>
  );
};

export default Courses;
