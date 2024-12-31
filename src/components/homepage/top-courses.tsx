import { Button } from "@/ui/buttons";
import { Section } from "@/ui/section";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { getAllCourses } from "@/services/courses";
import { CourseList } from "../courses/CourseList";

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
        <CourseList courses={topCourses} />
      </Section.Body>
    </Section>
  );
};
