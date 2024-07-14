import { Fragment } from "react";
import { Hero } from "./hero";
import { EffortlessLearning } from "./effortless-learning";
import { TopCourses } from "./top-courses";
import { CompleteCourse } from "./complete-course";

export const Homepage = () => {
  return (
    <Fragment>
      <Hero />
      <EffortlessLearning />
      <TopCourses />
      <CompleteCourse />
    </Fragment>
  );
};
