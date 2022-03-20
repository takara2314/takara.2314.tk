import type { NextPage } from 'next';
import Main from '../components/main';

const title = 'お問い合わせ';
const description = 'ご要望やご質問、お仕事の依頼などのお問い合わせができます。';

const Contact: NextPage = () => {
  return (
    <Main
      title={title}
      description={description}
    >
      <h1>お問い合わせ</h1>
    </Main>
  );
};

export default Contact;
