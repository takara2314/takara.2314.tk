import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import codes from './codes';
import { useMediaQuery } from 'react-responsive';

interface Props {
  codeOpacity: number
}

const BackCode = ({ codeOpacity }: Props) => {
  const codeObj1 = useRef<HTMLElement>(null);
  const codeObj2 = useRef<HTMLElement>(null);

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' });

  useEffect(() => {
    if (codeObj1.current === null || codeObj2.current === null) {
      return;
    }

    const typed1 = new Typed(codeObj1.current!, {
      strings: codes.slice(0, 2),
      startDelay: 2000,
      typeSpeed: 20,
      backSpeed: 30,
      backDelay: 5000,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    const typed2 = new Typed(codeObj2.current!, {
      strings: codes.slice(2),
      startDelay: 2000,
      typeSpeed: 20,
      backSpeed: 30,
      backDelay: 5000,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    return () => {
      typed1.destroy();
      typed2.destroy();
    };
  }, []);

  return (
    <section
      className="w-full xl:p-10 2xl:p-24 flex flex-row justify-between xl:fixed"
      style={{ opacity: codeOpacity }}
    >
      {isDesktopOrLaptop &&
        <>
          <div className="text-left text-gray-500 xl:text-2xl 2xl:text-3xl leading-[3rem] w-2/3">
            <code ref={codeObj1} />
          </div>

          <div className="text-left text-gray-500 xl:text-2xl 2xl:text-3xl leading-[3rem] w-1/3">
            <code ref={codeObj2} />
          </div>
        </>
      }
    </section>
  );
};

export default BackCode;
