"use client";

import { theme } from "@/theme/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { DM_Sans } from "next/font/google";
import PlausibleProvider from "next-plausible";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import Script from "next/script";

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
        <PlausibleProvider
          domain="kokua.wiki"
          scriptProps={{
            src: "https://plausible.io/js/script.manual.js",
          }}
        >
          <Script id="show-banner">
            {`window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`}
          </Script>

          <Script id="show-banner">
            {`
            
            function prepareUrl(params) {
              const url = new URL(location.href)
              const queryParams = new URLSearchParams(location.search)
              let customUrl = url.protocol + "//" + url.hostname + url.pathname.replace(/\/$/, '')
              
              if(params){
                for (const paramName of params) {
                  const paramValue = queryParams.get(paramName)
                  if (paramValue) customUrl = customUrl + '/' + paramValue
                }
              }

              return customUrl
            }
            plausible('pageview', { u: prepareUrl(["tag", "query"]) + window.location.search })
          

            `}
          </Script>

          <ChakraProvider theme={theme}>
            {children}

            <ProgressBar
              height="4px"
              color="#0018E7"
              options={{ showSpinner: false }}
              shallowRouting
            />
          </ChakraProvider>
        </PlausibleProvider>
      </CacheProvider>
    </>
  );
}
