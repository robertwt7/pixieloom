import { useEffect, useState } from "react";
import { useSupabase } from "./useSupabase";
import { User } from "@supabase/supabase-js";

export const useUser = () => {
  const { supabase } = useSupabase();
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase]);

  return { user };
};
