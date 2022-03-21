const Awards = () => {
  return (
    <>
      <h1 className="text-lime-900 font-bold text-3xl mb-3 mt-16">
        受賞
      </h1>

      <div className="bg-lime-100 p-6 rounded-2xl">
        <div className="mb-5">
          <h2 className="text-green-900 font-medium text-xl mb-1">
            高専プロコン 課題部門 最優秀賞
          </h2>
          <p className="text-sm">
            2021年10月
          </p>
        </div>
        <p>
          第32回 全国高等専門学校 プログラミングコンテスト 課題部門 最優秀賞
        </p>
        <p>
          「学魚養食」というマダイ養殖を小中学生が遠隔で体験するシステムを作りました。
        </p>
      </div>
    </>
  );
};

export default Awards;
