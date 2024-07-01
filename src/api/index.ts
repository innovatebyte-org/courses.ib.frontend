import axios from "axios";

const AxiosApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
  },
});

// AxiosApi.interceptors.response.use(
//   function(response) {
//     return response;
//   },
//   function(error) {
//     if (error.response && error.response.status === 401) {
//       // Redirect user to login page
//       const navigate = useNavigate();
//       navigate("/login"); // Update '/login' with your login page route
//     }
//     return Promise.reject(error);
//   },
// );

// AxiosApi.interceptors.request.use(function(config) {
//   // const token = getToken();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//
//   return config;
// });

export default AxiosApi;
