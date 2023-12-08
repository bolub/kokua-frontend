import type { Metadata } from "next";
import { Providers } from "../(website)/providers";
import { DataLayer } from "@/components/DataLayer";
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
            <DataLayer>{children}</DataLayer>
          </Providers>
        </body>
      </html>
    </>
  );
}
