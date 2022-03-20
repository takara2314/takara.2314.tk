import type { NextPage } from 'next';
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import Typed from "typed.js";
import Image from 'next/image';
import Main from '../components/main';

const title = '僕について';
const description = '色々なことをやっている高専新4年生です！幼少期にPCに興味を持ち、情報系の学校に進学しました。';

const Home: NextPage = () => {
  const [namePhase, setNamePhase] = useState<number>(0.0);
  const nameObj = useRef<HTMLSpanElement>(null);

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' });

  useEffect(() => {
    const typed = new Typed(nameObj.current!, {
      strings: ["濱口　宝", "Takara Hamaguchi", "takara2314", "濱口　宝", "はまぐち　たから", "กิตติพศ ทาการะ", "濱口　宝", "ふぉくしーど", "タカラーン", "濱口　宝", "ハマグチ　タカラ", "たからん"],
      startDelay: 3000,
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 5000,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const handler = () => {
      if (window.pageYOffset / 10 >= 80) {
        setNamePhase(80);
      } else {
        setNamePhase(window.pageYOffset / 10);
      }
    };

    window.addEventListener('scroll', handler);

    return () => {
      window.removeEventListener('scroll', handler);
    };
  });

  return (
    <Main
      title={title}
      description={description}
    >
      <section
        className="text-center flex flex-col items-center xl:fixed xl:top-32"
        style={isDesktopOrLaptop ? {
          left: '0rem',
          right: `${namePhase}rem`
        } : {}}
      >
        <div className="my-10 w-[70vw] xl:w-96 h-[70vw] xl:h-96 relative">
          <Image
            src="/takara.png"
            alt="濱口　宝"
            layout="fill"
            className="rounded-full"
          />
        </div>
        <h1 className="xl:w-[48rem] text-4xl xl:text-5xl text-green-700 font-bold">
          <span ref={nameObj}>濱口　宝</span>
        </h1>
        <div className="mt-5">
          <h2>@takara2314</h2>
          <h2>学生 / 自称フルスタックエンジニア</h2>
        </div>
        <div className="mt-5 text-gray-500">
          <small>© 2022 Takara Hamaguchi</small>
        </div>
      </section>

      <div className="mt-[10vh] xl:mt-[120vh]" />

      <section className="bg-lime-200 xl:ml-[32rem] p-6 xl:p-10 w-full xl:w-[72rem] xl:min-h-[80vh] rounded-t-2xl">
        <h1 className="text-lime-900 font-bold text-3xl mb-5">
          僕について
        </h1>
        <p>
          こんにちは！
        </p>
        <p>
          気まぐれで生きている高専4年生(18歳)です！ 幼少期にPCに興味を持ってから、PCと親友になりました。
        </p>
        <p>
          気軽に
          「<span className="text-green-900">タカラーン</span>」
          や
          「<span className="text-green-900">たからん</span>」
          と呼んでくれると嬉しいです！
        </p>
      </section>
    </Main>
  );
};

export default Home;
