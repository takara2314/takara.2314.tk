import type { NextPage } from 'next';
import Link from 'next/link';
import Main from '../components/main';

const title = '僕について';
const description = '色々なことをやっている高専新4年生です！幼少期にPCに興味を持ち、情報系の学校に進学しました。';

const Home: NextPage = () => {
  return (
    <Main
      title={title}
      description={description}
    >
      <h1>濱口　宝のページ</h1>
      <Link href="/skills">
        <a>スキル</a>
      </Link>
    </Main>
  );
};

export default Home;
