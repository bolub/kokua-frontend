"use client";

import { theme } from "@/theme/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { DM_Sans } from "next/font/google";
import PlausibleProvider from "next-plausible";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-dm-sans: ${dm_sans.style.fontFamily};
          }
        `}
      </style>

      <CacheProvider>
        <PlausibleProvider domain="kokua.wiki">
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </PlausibleProvider>
      </CacheProvider>
    </>
  );
}
