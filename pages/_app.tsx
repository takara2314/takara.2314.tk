import Head from 'next/head';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { DefaultSeo } from 'next-seo';
import { AnimatePresence } from 'framer-motion';
import Nav from '../components/nav/nav';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const url = `https://takara.2314.tk${router.route}`;

  // Apply user color theme.
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <DefaultSeo
        titleTemplate="%s - 濱口　宝"
        openGraph={{
          type: 'website',
          locale: 'ja_JP',
          url,
          description: '濱口　宝のウェブページです。学生であり開発者でもあります。'
        }}
      />

      <Nav route={router.route} />

      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
};

export default MyApp;
