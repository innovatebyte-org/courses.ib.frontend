const api = process.env.NEXT_PUBLIC_BASE_URL;

export const apis = {
  auth: {
    register: `${api}/auth/register`,
    login: `${api}/auth/login`,
    verify: `${api}/auth/verify`,
    resendCode: `${api}/auth/resend-code`,
    resetPassword: `${api}/auth/reset-password`,
    forgotPassword: `${api}/auth/forgot-password`,
    getUser: `${api}/auth/user-details`,
  },
  courses: {
    allCourses: `${api}/courses/all`,
    studentCourses: `${api}/courses/my-courses`,
  },
};
