import { useState } from "react";

const Sample4 = () => {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  return (
    <>
      <div>
        <span>좋아요{like}</span>
        <span>싫어요{disLike}</span>
      </div>
      <button onClick={() => setLike(like + 1)}>좋아요</button>
      <button
        onClick={() => {
          setDisLike(disLike + 1);
          setLike(like - 1);
        }}
      >
        싫어요
      </button>
    </>
  );
};

export default Sample4;
