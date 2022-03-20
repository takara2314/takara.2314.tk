import type { NextPage } from 'next';
import Main from '../components/main';

const title = 'できること';
const description = 'プログラミング言語は、GoとPythonとTypeScriptができます。';

const Skills: NextPage = () => {
  return (
    <Main
      title={title}
      description={description}
    >
      <h1>できること</h1>
    </Main>
  );
};

export default Skills;
