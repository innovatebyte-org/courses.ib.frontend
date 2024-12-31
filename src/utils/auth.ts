export const getAuthToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("ib_auth_token") ?? null;
  }
  return null;
};
