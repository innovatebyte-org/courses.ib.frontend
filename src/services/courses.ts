import AxiosApi from "@/api";
import { apis } from "@/api/api";
import { Course } from "@/types/api";
import { AxiosError } from "axios";

export const getAllCourses = async () => {
  return AxiosApi.get<{ courses: Array<Course> }>(apis.courses.allCourses).then(
    (res) => {
      return res.data.courses;
    }
  );
};

export const getSingleCourse = async (slug: string) => {
  return AxiosApi.get<{ course: Course }>(apis.courses.singleCourse(slug)).then(
    (res) => {
      return res.data.course;
    }
  );
};

export const getStudentCourses = async () => {
  return AxiosApi.get<{ courses: Array<Course> }>(apis.courses.studentCourses)
    .then((res) => {
      return res.data.courses;
    })
    .catch((error) => {
      if (error instanceof AxiosError) {
        console.log(`error message ~> ${error.response?.data.message}`);
      }
    });
};
