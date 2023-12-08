import type { Metadata } from "next";
import { Providers } from "../(website)/providers";
import { LayoutContainer } from "@/components/LayoutContainer";
import { getFramework, getLanguages } from "@/utils/api";
export const metadata: Metadata = {
  title: "Kokua",
  description:
    "Kokua is a place for developers to explore different resources for their daily tasks",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const frameworks = await getFramework();
  const languages = await getLanguages();

  return (
    <>
      <html lang="en">
        <body>
          <Providers>
            <LayoutContainer frameworks={frameworks} languages={languages}>
              {children}
            </LayoutContainer>
          </Providers>
        </body>
      </html>
    </>
  );
}
