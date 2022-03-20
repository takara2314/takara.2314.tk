import type { NextPage } from 'next';
import Main from '../components/main';

const title = '作ったもの';
const description = '様々なものを開発しています。';

const Works: NextPage = () => {
  return (
    <Main
      title={title}
      description={description}
    >
      <h1>作ったもの</h1>
    </Main>
  );
};

export default Works;
