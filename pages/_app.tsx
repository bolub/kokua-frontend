import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../chakra/theme';

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Navbar } from '../components/Navbar';
import Seo from '../components/Seo';
import { useState } from 'react';
import NextNProgress from 'nextjs-progressbar';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        {/* @ts-ignore */}
        <Hydrate state={pageProps.dehydratedState}>
          <ReactQueryDevtools initialIsOpen={false} />

          <Seo />

          <Script
            id='initializeGoogleTag'
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-EBF9RHVBLZ'
          />

          <Script
            id='tagCode'
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
            defer
            data-domain='kokua.wiki'
            src='https://plausible.io/js/script.js'
          />

          <Navbar />
          <Component {...pageProps} />
          <NextNProgress color='#0018E7' />
        </Hydrate>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
