import type { NextPage } from 'next';
import Main from '../components/main';

const title = '好きなもの';
const description = '食べ物部門では、ハンバーガーと寿司と牛丼が好きです。';

const Favorites: NextPage = () => {
  return (
    <Main
      title={title}
      description={description}
    >
      <h1>好きなもの</h1>
    </Main>
  );
};

export default Favorites;
