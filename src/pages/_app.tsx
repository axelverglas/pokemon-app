import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google'
import '@/styles/globals.css';
import Header from '@/components/Header';

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-montserrat',
});


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${montserrat.variable} font-sans`}>
        <Header/>
        <main className="container mx-auto">
          <Component {...pageProps} />
        </main>
    </div>
  );
}

export default MyApp;
