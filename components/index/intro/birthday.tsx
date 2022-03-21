const Birthday = () => {
  return (
    <>
      <h1 className="text-lime-900 font-bold text-3xl mb-3 mt-16">
        誕生日
      </h1>

      <div className="bg-lime-100 p-6 rounded-2xl">
        <h2 className="font-medium text-xl mb-5">
          <span className="text-green-900">
            2003年11月14日
          </span>
          <span className="text-gray-500">
            （タイ/日本時間）
          </span>
        </h2>
        <p>
          生まれはタイ、育ちは日本のハーフです。
        </p>
        <p>
          ハーフですが、タイ語を話せません。
        </p>
        <p className="text-gray-500">
          （ほとんど忘れました）
        </p>
      </div>
    </>
  );
};

export default Birthday;
