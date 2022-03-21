import { useEffect, useRef } from "react";
import Typed from 'typed.js';
import Image from 'next/image';

interface Props {
  namePhase: number
}

const Profile = ({ namePhase }: Props) => {
  const nameObj = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(nameObj.current!, {
      strings: ['濱口　宝', 'Takara Hamaguchi', 'takara2314', '濱口　宝', 'はまぐち　たから', 'กิตติพศ ทาการะ', '濱口　宝', 'ふぉくしーど', 'タカラーン', '濱口　宝', 'ハマグチ　タカラ', 'たからん'],
      startDelay: 3000,
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 5000,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      className="text-center flex flex-col items-center xl:fixed xl:top-32"
      style={{
        left: '0rem',
        right: `${namePhase}rem`
      }}
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
  );
};

export default Profile;
