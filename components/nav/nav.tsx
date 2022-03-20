import Link from 'next/link';
import { useEffect } from 'react';
import Item from './item';
import CenterText from '../centerText';

interface Props {
  route: string
}

const Nav = ({ route }: Props) => {
  useEffect(() => {
    console.log(route);
  }, [route]);

  return (
    <nav className="m-3 rounded-2xl shadow-lg flex flex-row relative">
      <section className="px-7 py-4 flex flex-row">
        <div>
          <CenterText>
            <Link href="/">
              <a>
                <h1 className="text-green-700 text-2xl font-bold">
                  濱口　宝
                </h1>
              </a>
            </Link>
          </CenterText>
        </div>

        <ul className="w-[48rem] ml-16 flex flex-row justify-between">
          <Item
            name="僕について"
            route="/"
            activeStyle="text-orange-600 font-bold"
            now={route}
          />
          <Item
            name="できること"
            route="/skills"
            activeStyle="text-sky-700 font-bold"
            now={route}
          />
          <Item
            name="作ったもの"
            route="/works"
            activeStyle="text-green-700 font-bold"
            now={route}
          />
          <Item
            name="好きなもの"
            route="/favorites"
            activeStyle="text-red-600 font-bold"
            now={route}
          />
          <Item
            name="お問い合わせ"
            route="/contact"
            activeStyle="text-blue-700 font-bold"
            now={route}
          />
        </ul>
      </section>

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
    </nav>
  );
};

export default Nav;
