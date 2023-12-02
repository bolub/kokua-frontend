import type { Metadata } from "next";
import { Providers } from "./providers";
import { LayoutContainer } from "@/components/LayoutContainer";

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
            <LayoutContainer>{children}</LayoutContainer>
          </Providers>
        </body>
      </html>
    </>
  );
}
