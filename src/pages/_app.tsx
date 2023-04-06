import { QueryClientProvider, QueryClient, Hydrate } from 'react-query';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google'
import '@/styles/globals.css';

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <main className={`${montserrat.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
