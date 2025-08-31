# Abstract Authentication and Refactor Home Page

## Description

This task involves several related changes to the application:

1.  **Create a link to the SignUpForm:** The application should have a clear link to the sign-up page.
2.  **Abstract authentication logic:** Instead of guarding pages individually, we need a centralized route dictionary to manage protected routes.
3.  **Update route protection:** The home page (`/`) should be public, but the image editing functionality (e.g., after clicking "Upload an image") should be protected.
4.  **Refactor `Home.tsx`:** The `Home.tsx` component should be split to separate the public-facing start screen from the protected editor UI.

The goal is to make the authentication more scalable and to improve the user flow for new and existing users.
