import type { Metadata } from "next";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";

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
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </body>
      </html>
    </>
  );
}
