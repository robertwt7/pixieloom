# Plan for Abstracting Authentication and Refactoring Home Page

This document outlines the plan to refactor the authentication system, update the home page, and improve user navigation.

## Plan

1.  **Create `issue/issue_2.md` and `docs/plan_2.md`**
    -   Create `issue/issue_2.md` to document the issue.
    -   Create `docs/plan_2.md` to document the plan and the steps taken.

2.  **Create a Route Dictionary for Authentication**
    -   Create a new file `src/config/routes.ts` to define which routes are public and which are protected.
    -   This file will export a dictionary or a set of functions to check if a given route is protected.

3.  **Update the Authentication Guard**
    -   Modify `src/components/AuthGuard.tsx` to use the new route dictionary.
    -   The guard will check the current path using `usePathname` from `next/navigation` and, if the route is protected and the user is not logged in, it will redirect to `/login`.

4.  **Refactor the Home Page**
    -   Create a new component `src/components/Editor/Editor.tsx` that will contain the image editing UI, which is currently in `src/components/Home/Home.tsx`.
    -   Create a new route `src/app/editor/page.tsx` for the editor. This route will be protected.
    -   Modify `src/components/Home/Home.tsx` to only contain the `StartScreen` and related logic.
    -   Update `src/app/page.tsx` to no longer use the `AuthGuard` directly, as the protection will be handled at the route level.

5.  **Add a Link to the SignUp Form**
    -   Add a link to `/signup` on the home page, likely within the `StartScreen` component or the main `Header`.

6.  **Final review**
    -   I will read all the files changed to be sure that the code is correct.

## Execution

### Step 1: Create `issue/issue_2.md` and `docs/plan_2.md`

-   [x] Created `issue/issue_2.md` with a summary of the task.
-   [x] Created `docs/plan_2.md` with the detailed plan.
