import { ApiType, AppType } from "./types";

export const api: ApiType = {
  CLOUDFLARE_ACCOUNT_ID: process.env.CLOUDFLARE_ACCOUNT_ID ?? "",
  CLOUDFLARE_TOKEN: process.env.CLOUDFLARE_TOKEN ?? "",
  ZONE_ID: process.env.ZONE_ID ?? "",
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY ?? "",
  STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET ?? "",
  STRIPE_PRICE_ID_FIVE_CREDIT: process.env.STRIPE_PRICE_ID_FIVE_CREDIT ?? "",
  STRIPE_PRICE_ID_TWENTY_CREDIT:
    process.env.STRIPE_PRICE_ID_TWENTY_CREDIT ?? "",
  STRIPE_PRICE_ID_HUNDRED_CREDIT:
    process.env.STRIPE_PRICE_ID_HUNDRED_CREDIT ?? "",
  GEMINI_API_KEY: process.env.GEMINI_API_KEY ?? "",
};

export const app: AppType = {
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  NEXT_PUBLIC_SUPABASE_ANON_KEY:
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
};
