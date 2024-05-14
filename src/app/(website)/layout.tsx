import { Providers } from "../(website)/providers";
import { DataLayer } from "@/components/DataLayer";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>
        <Providers>
          <DataLayer>{children}</DataLayer>
        </Providers>
      </main>
    </>
  );
}
