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

      <Script
        id="initializeGoogleTag"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-EBF9RHVBLZ"
      />

      <Script
        id="tagCode"
        dangerouslySetInnerHTML={{
          __html: `
                 window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-EBF9RHVBLZ');
              `,
        }}
      />

      <Script
        id="plausible"
        defer
        data-domain="kokua.wiki"
        src="https://plausible.io/js/script.manual.js"
        strategy="afterInteractive"
      />

      <Script strategy="afterInteractive" id="plausible-setup">
        {`window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`}
      </Script>

      <Script strategy="afterInteractive" id="plausible-tag-setup">
        {`
          function prepareUrl(params) {
            const url = new URL(location.href)
            const queryParams = new URLSearchParams(location.search)
            let customUrl = url.protocol + "//" + url.hostname + url.pathname.replace(/\/$/, '')

            console.log(params)
            
            params.forEach(paramName =>{
              const paramValue = queryParams.get(paramName)
              if (paramValue) customUrl = customUrl + '/' + paramValue
            })

            return customUrl
          }
          plausible('pageview', { u: prepareUrl(["query", "tag" ]) + window.location.search })
        `}
      </Script>

      <CacheProvider>
        {/* <PlausibleProvider domain="kokua.wiki"> */}
        <ChakraProvider theme={theme}>
          {children}

          <ProgressBar
            height="4px"
            color="#0018E7"
            options={{ showSpinner: false }}
            shallowRouting
          />
        </ChakraProvider>
        {/* </PlausibleProvider> */}
      </CacheProvider>
    </>
  );
}
