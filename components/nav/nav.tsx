import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import Item from './item';
import CenterText from '../centerText';

interface Props {
  route: string
}

const Nav = ({ route }: Props) => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

  return (
    <nav className="bg-white rounded-2xl shadow-lg flex flex-row relative">
      <section className="w-full px-3 landscape:px-10 xl:px-7 lg:portrait:px-16 py-4 landscape:py-2 xl:landscape:py-4 flex flex-col xl:flex-row">
        <div className="relative">
          <CenterText>
            <Link href="/">
              <a>
                <h1 className="text-center xl:text-left mb-3 xl:mb-0 text-green-700 text-2xl font-bold">
                  濱口　宝
                </h1>
              </a>
            </Link>
          </CenterText>

          {!isDesktopOrLaptop &&
            <section className="absolute top-0 right-1">
              <Link href="https://2314.tk">
                <a>
                  <CenterText>
                    <div className="h-8 text-lime-600 bg-gray-100 font-bold px-5 rounded-full">
                      <CenterText>
                        {isPortrait ? '3D' : '3Dバージョン'}
                      </CenterText>
                    </div>
                  </CenterText>
                </a>
              </Link>
            </section>
          }
        </div>

        <ul className="w-full xl:w-[56rem] xl:ml-16 flex flex-row justify-between">
          <Item
            name="僕について"
            route="/"
            activeStyle="text-orange-600 font-bold text-[0.7rem] xl:text-lg"
            now={route}
          />
          <Item
            name="できること"
            route="/skills"
            activeStyle="text-sky-700 font-bold text-[0.7rem] xl:text-lg"
            now={route}
          />
          <Item
            name="作ったもの"
            route="/works"
            activeStyle="text-green-700 font-bold text-[0.7rem] xl:text-lg"
            now={route}
          />
          <Item
            name="好きなもの"
            route="/favorites"
            activeStyle="text-red-600 font-bold text-[0.7rem] xl:text-lg"
            now={route}
          />
          <Item
            name="お問い合わせ"
            route="/contact"
            activeStyle="text-blue-700 font-bold text-[0.7rem] xl:text-lg"
            now={route}
          />
        </ul>
      </section>

      {isDesktopOrLaptop &&
        <section className="h-full absolute right-7">
          <Link href="https://2314.tk">
            <a>
              <CenterText>
                <div className="h-10 text-lime-600 bg-gray-100 font-bold px-5 rounded-full">
                  <CenterText>
                    3Dバージョン
                  </CenterText>
                </div>
              </CenterText>
            </a>
          </Link>
        </section>
      }
    </nav>
  );
};

export default Nav;
