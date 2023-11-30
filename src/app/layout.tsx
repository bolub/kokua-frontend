import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Kokua",
  description:
    "Kokua is a place for developers to explore different resources for their daily tasks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body>
          <Providers>{children}</Providers>
        </body>
      </html>
    </>
  );
}
