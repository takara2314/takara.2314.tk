import type { NextPage } from 'next';
import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import Main from '../components/main';
import BackCode from '../components/index/backcode/backcode';
import Profile from '../components/index/profile';
import About from '../components/index/intro/about';

const title = '僕について';
const description = '色々なことをやっている高専新4年生です！幼少期にPCに興味を持ち、情報系の学校に進学しました。';

interface Props {
  contents: string[]
}

const Home: NextPage<Props> = ({ contents }: Props) => {
  const [namePhase, setNamePhase] = useState<number>(0.0);
  const [codeOpacity, setCodeOpacity] = useState<number>(1.0);

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' });
  const isBigDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1536px)' });

  useEffect(() => {
    const handler = () => {
      if (isDesktopOrLaptop) {
        if (window.pageYOffset / 10 >= 80.0 && isBigDesktopOrLaptop) {
          setNamePhase(80.0);
        } else if (window.pageYOffset / 10 >= 50.0 && !isBigDesktopOrLaptop) {
          setNamePhase(50.0);
        } else {
          setNamePhase(window.pageYOffset / 10);
        }

        if (1 - window.pageYOffset / 800 < 0.0 && isBigDesktopOrLaptop) {
          setCodeOpacity(0.0);
        } else {
          setCodeOpacity(1 - window.pageYOffset / 800);
        }
      }
    };

    window.addEventListener('scroll', handler);

    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, [isDesktopOrLaptop, isBigDesktopOrLaptop]);

  return (
    <Main
      title={title}
      description={description}
    >
      <BackCode codeOpacity={codeOpacity} />

      <Profile namePhase={namePhase} />

      <div className="mt-[10vh] xl:mt-[120vh]" />

      <section className="bg-lime-200 xl:ml-[28rem] 2xl:ml-[32rem] p-6 xl:p-10 w-full xl:w-[48rem] 2xl:w-[72rem] xl:min-h-[80vh] rounded-t-2xl">
        {/* <About /> */}
        {contents.map((content: string) =>
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            key={content}
          />
        )}
      </section>
    </Main>
  );
};

export const getServerSideProps = async () => {
  let content: string = '';

  await fetch(`${process.env.MEMOAPI_ENDPOINT}`, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Authorization': `Bearer ${process.env.MEMOAPI_TOKEN}`
    }
  })
    .then((res) => res.text())
    .then((html) => {
      content = html;
    });

  return {
    props: {
      contents: [
        content
      ]
    }
  };
};

export default Home;
