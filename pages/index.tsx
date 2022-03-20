import type { NextPage } from 'next';
import Main from '../components/main';

const title = '僕について';
const description = '色々なことをやっている高専新4年生です！幼少期にPCに興味を持ち、情報系の学校に進学しました。';

const Home: NextPage = () => {
  return (
    <Main
      title={title}
      description={description}
    >
      <h1>僕について</h1>
    </Main>
  );
};

export default Home;
