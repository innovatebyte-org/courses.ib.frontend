import { MyLearningPage } from "@/components/my-learning";
import { getStudentCourses } from "@/services/courses";
import { Suspense } from "react";

export default async function MyLearning() {
  const courses = await getStudentCourses();
  return (
    <div className="w-full px-5 lg:px-20">
      <div>
        <h3>Welcome back to your courses.</h3>
        <p>Here&apos;s a list of your courses.</p>
      </div>
      <Suspense fallback={<p>course skeleton</p>}>
        <MyLearningPage courses={courses || []} />
      </Suspense>
    </div>
  );
}
