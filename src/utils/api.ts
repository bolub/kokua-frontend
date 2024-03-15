export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://www.kokua.wiki"
    : `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
export const serverBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://www.kokua.wiki"
    : `${process.env.PROTOCOL}://${process.env.VERCEL_URL}`;
