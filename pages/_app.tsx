import Head from 'next/head';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { DefaultSeo } from 'next-seo';
import { AnimatePresence } from 'framer-motion';
import Nav from '../components/nav/nav';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const url = `https://takara.2314.tk${router.route}`;

  const preloadImages = [
    '/nav-icon/about-active.svg',
    '/nav-icon/about.svg',
    '/nav-icon/contact-active.svg',
    '/nav-icon/contact.svg',
    '/nav-icon/favorites-active.svg',
    '/nav-icon/favorites.svg',
    '/nav-icon/skills-active.svg',
    '/nav-icon/skills.svg',
    '/nav-icon/works-active.svg',
    '/nav-icon/works.svg'
  ];

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
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        {preloadImages.map((imgUrl) =>
          <link href={imgUrl} as="image" rel="preload" key={imgUrl} />
        )}
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

      <header className="w-full p-3 fixed">
        <Nav route={router.route} />
      </header>

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
