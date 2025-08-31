import { app } from "@/env";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  app.NEXT_PUBLIC_SUPABASE_URL,
  app.NEXT_PUBLIC_SUPABASE_ANON_KEY,
);
