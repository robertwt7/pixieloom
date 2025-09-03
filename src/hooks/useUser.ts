import { useEffect, useState } from "react";
import { useSupabase } from "./useSupabase";
import { Session, User } from "@supabase/supabase-js";

export const useUser = () => {
  const { supabase } = useSupabase();
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [session, setSession] = useState<Session | null>(null);
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        setSession(session);
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase]);

  return { user, session };
};
