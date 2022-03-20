import Link from 'next/link';
import { useEffect, useState } from 'react';
import CenterText from '../centerText';

interface Props {
  name: string
  route: string
  activeStyle: string
  now: string
}

const Item = ({ name, route, activeStyle, now }: Props) => {
  const [url, setUrl] = useState<string>('/nav-icon/about.svg');
  const [urlActive, setUrlActive] = useState<string>('/nav-icon/about-active.svg');

  useEffect(() => {
    let _route = route;

    if (_route === '/') {
      _route = '/about';
    }

    setUrl(`/nav-icon${_route}.svg`);
    setUrlActive(`/nav-icon${_route}-active.svg`);
  }, [route]);

  return (
    <li>
      <Link href={route}>
        <a>
          <div className="flex flex-col xl:flex-row">
            <div className="flex flex-col m-auto inset-0">
              <CenterText>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={route !== now ? url : urlActive}
                  alt={name}
                  width="40rem"
                  className="text-center xl:mr-2"
                />
              </CenterText>
            </div>
            <div className={route !== now ? 'text-gray-500 font-medium text-[0.7rem] xl:text-lg' : activeStyle}>
              <CenterText>
                {name}
              </CenterText>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default Item;
