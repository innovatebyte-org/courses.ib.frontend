import { Button } from "@/ui/buttons";
import { Section } from "@/ui/section";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

import coverImage from "@/assets/course_cover_image.png";
import { CourseCard } from "@/ui/course-card";
import { IBTutorIcon } from "@/assets/icons";

export const TopCourses = () => (
  <Section className="bg-ib-grey-50">
    <Section.Heading>
      <Section.Title className="w-3/4 lg:w-1/2">
        Our top courses <Section.ColoredTitle>for you</Section.ColoredTitle>
      </Section.Title>
      <Section.Description>
        Discover the most popular online courses
      </Section.Description>
    </Section.Heading>
    <Section.Body className="gap-2 justify-end items-end">
      <Button
        link="/courses"
        icon={<ArrowUpRightIcon className="text-current size-6" />}
        className="w-max"
        variant={"text"}
      >
        Explore courses
      </Button>
      <div className="my-flex-col justify-end-end gap-5 lg:grid lg:grid-cols-3">
        <CourseCard>
          <CourseCard.Heading
            coverImage={coverImage}
            tutor={{ name: "InnovateByte experts", image: <IBTutorIcon /> }}
          />
          <CourseCard.Content>
            <CourseCard.Rate rate={4.5} level="beginner" />
            <CourseCard.Title title="Master React: From Beginner to Advanced in No Time" />
            <CourseCard.Info
              noOfModules={14}
              hours={14}
              category="development"
            />
            <CourseCard.Price price="100,000" />
          </CourseCard.Content>
        </CourseCard>
        <CourseCard>
          <CourseCard.Heading
            coverImage={coverImage}
            tutor={{ name: "InnovateByte experts", image: <IBTutorIcon /> }}
          />
          <CourseCard.Content>
            <CourseCard.Rate rate={4.5} level="beginner" />
            <CourseCard.Title title="Master HTML, CSS, & JavaScript in 2024 (No Experience Needed)" />
            <CourseCard.Info
              noOfModules={14}
              hours={14}
              category="development"
            />
            <CourseCard.Price price="100,000" />
          </CourseCard.Content>
        </CourseCard>
        <CourseCard>
          <CourseCard.Heading
            coverImage={coverImage}
            tutor={{ name: "InnovateByte experts", image: <IBTutorIcon /> }}
          />
          <CourseCard.Content>
            <CourseCard.Rate rate={4.5} level="intermediate" />
            <CourseCard.Title title="Become a TypeScript Pro: Start Learning Today" />
            <CourseCard.Info
              noOfModules={14}
              hours={14}
              category="development"
            />
            <CourseCard.Price price="100,000" />
          </CourseCard.Content>
        </CourseCard>
        <CourseCard>
          <CourseCard.Heading
            coverImage={coverImage}
            tutor={{ name: "InnovateByte experts", image: <IBTutorIcon /> }}
          />
          <CourseCard.Content>
            <CourseCard.Rate rate={4.5} level="expert" />
            <CourseCard.Title title="Master Node.js: Your Ultimate Guide to Server-Side JavaScript" />
            <CourseCard.Info
              noOfModules={14}
              hours={14}
              category="development"
            />
            <CourseCard.Price price="100,000" />
          </CourseCard.Content>
        </CourseCard>
        <CourseCard>
          <CourseCard.Heading
            coverImage={coverImage}
            tutor={{ name: "InnovateByte experts", image: <IBTutorIcon /> }}
          />
          <CourseCard.Content>
            <CourseCard.Rate rate={4.5} level="intermediate" />
            <CourseCard.Title title="Unlock Advanced CSS & JavaScript Techniques for Stunning Web Designs! - Master React: From Beginner to Advanced in No Time!" />
            <CourseCard.Info
              noOfModules={14}
              hours={14}
              category="development"
            />
            <CourseCard.Price price="100,000" />
          </CourseCard.Content>
        </CourseCard>
        <CourseCard>
          <CourseCard.Heading
            coverImage={coverImage}
            tutor={{ name: "InnovateByte experts", image: <IBTutorIcon /> }}
          />
          <CourseCard.Content>
            <CourseCard.Rate rate={4.5} level="beginner" />
            <CourseCard.Title title="Frontend development fundamentals" />
            <CourseCard.Info
              noOfModules={14}
              hours={14}
              category="development"
            />
            <CourseCard.Price price="100,000" />
          </CourseCard.Content>
        </CourseCard>
      </div>
    </Section.Body>
  </Section>
);
