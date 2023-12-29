import { Providers } from "../(website)/providers";
import { DataLayer } from "@/components/DataLayer";

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
