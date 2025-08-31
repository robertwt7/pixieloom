export const publicRoutes: string[] = ["/", "/login", "/signup"];

export const isProtectedRoute = (path: string): boolean => {
  return !publicRoutes.includes(path);
};
