import type { NextPage } from 'next';
import Link from 'next/link';
import CenterText from '../components/centerText';
import Main from '../components/main';

const title = '作ったもの';
const description = '様々なものを開発しています。';

const Works: NextPage = () => {
  return (
    <Main
      title={title}
      description={description}
    >
      <section className="mt-10 w-[70%] leading-8">
        <div className="flex flex-row justify-between">
          <div className="w-1/2 pr-10">
            <h1 className="font-bold text-3xl text-sky-700 mb-5">
              学魚養食
            </h1>
            <p>
              マダイ養殖を小中学生が遠隔で体験するシステムです。タブレット端末で給餌や魚体サイズの測定をすることや、実際のデータを見ながら養殖日誌を記述してもらうことで、遠隔から養殖支援をすることができます。
            </p>
          </div>
          <div
            className="w-1/2 h-[16rem] bg-sky-300 rounded-2xl my-5 ml-5"
          />
        </div>

        <div className="mt-48 flex flex-row justify-between">
          <div
            className="w-1/2 h-[16rem] bg-green-300 rounded-2xl my-5 mr-5"
          />
          <div className="w-1/2 pl-10">
            <h1 className="font-bold text-3xl text-green-700 mb-5">
              ポートフォリオサイト（3Dバージョン）
            </h1>
            <p>
              個性を存分に引き出した僕のポートフォリオサイトです。 何かのワールドに入ったかのように、サイトを回ることができます。
            </p>
          </div>
        </div>

        <div className="mt-48 flex flex-row justify-between">
          <div className="w-1/2 pr-10">
            <h1 className="font-bold text-3xl text-purple-700 mb-5">
              Kadai Store API
            </h1>
            <p>
              MS Teamsから課題情報を取得するAPIです。公式のAPIは組織管理者以外は利用できないため、課題情報を利用して開発したい学生向けです。
            </p>
          </div>
          <div
            className="w-1/2 h-[16rem] bg-purple-300 rounded-2xl my-5 ml-5"
          />
        </div>

        <div className="mt-48 flex flex-row justify-between">
          <div
            className="w-1/2 h-[16rem] bg-red-300 rounded-2xl my-5 mr-5"
          />
          <div className="w-1/2 pl-10">
            <h1 className="font-bold text-3xl text-red-700 mb-5">
              Kadai Alarm
            </h1>
            <p>
              課題を忘れることを防止して、提出期限に近づいたらTwitterの名前変更で気づかせるシステムです。
            </p>
          </div>
        </div>

        <div className="mt-48 flex flex-row justify-between">
          <div className="w-1/2 pr-10">
            <h1 className="font-bold text-3xl text-orange-700 mb-5">
              劣化版カンジー博士
            </h1>
            <p>
              国語の試験に出題される漢字問題を、一問一答形式で出してくれるLINEボットです。
            </p>
          </div>
          <div
            className="w-1/2 h-[16rem] bg-orange-300 rounded-2xl my-5 ml-5"
          />
        </div>

        <CenterText>
          <Link href="https://2314.tk/works">
            <a className="font-medium bg-sky-800 text-white text-3xl px-12 py-3 mt-24 rounded-full">
              他の製作物も見る
            </a>
          </Link>
        </CenterText>
      </section>

      <div className="mt-[20vh]" />
    </Main>
  );
};

export default Works;
