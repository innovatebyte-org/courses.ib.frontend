import { getSingleCourse } from "@/services/courses";

const SingleCourse = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const course = await getSingleCourse(slug);

  return (
    <div>
      <h2>{course.title}</h2>
    </div>
  );
};

export default SingleCourse;
