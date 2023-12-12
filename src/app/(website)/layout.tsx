import type { Metadata } from "next";
import { Providers } from "../(website)/providers";
import { DataLayer } from "@/components/DataLayer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Kokua",
  description:
    "Kokua is a place for developers to explore different resources for their daily tasks",
  openGraph: {
    images: [
      "https://res.cloudinary.com/bolub/image/upload/v1702110661/Kokua/KokuaOgImage.png",
    ],
  },
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
        </body>
      </html>
    </>
  );
}
