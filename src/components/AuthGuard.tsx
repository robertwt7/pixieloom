"use client";

import { useUser } from "@/hooks/useUser";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { isProtectedRoute } from "@/config/routes";
import { Spinner } from "@/components/Spinner";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  const isProtected = isProtectedRoute(pathname);

  useEffect(() => {
    if (user === null && isProtected) {
      router.push("/login");
    }
  }, [user, router, isProtected, pathname]);

  if (user === undefined) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (isProtected && !user) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthGuard;
