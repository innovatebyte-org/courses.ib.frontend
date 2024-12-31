import { Button } from "@/ui/buttons";
import { Section } from "@/ui/section";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import coverImage from "@/assets/course_cover_image.png";
import { CourseCard } from "@/ui/course-card";
import { IBTutorIcon } from "@/assets/icons";
import { getAllCourses } from "@/services/courses";

export const TopCourses = async () => {
  const courses = await getAllCourses();
  const topCourses = courses.slice(0, 4);

  return (
    <Section className="bg-ib-grey-50">
      <Section.Heading>
        <Section.Title className="w-3/4 lg:w-1/2">
          Our top courses <Section.ColoredTitle>for you</Section.ColoredTitle>
        </Section.Title>
        <Section.Description>
          Discover the most popular online courses
        </Section.Description>
      </Section.Heading>
      <Section.Body className="gap-2 lg:grid-cols-1">
        <Button
          link="/courses"
          icon={<ArrowUpRightIcon className="text-current size-6" />}
          className="w-max justify-end"
          variant={"text"}
        >
          Explore courses
        </Button>
        <div className="my-flex-col justify-end-end gap-5 lg:grid lg:grid-cols-3">
          {topCourses.map((course) => (
            <CourseCard key={course._id}>
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
          ))}
        </div>
      </Section.Body>
    </Section>
  );
};
