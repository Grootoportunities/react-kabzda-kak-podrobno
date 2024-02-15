import { useEffect, useState } from "react";

export default { title: "useEffect" };

export const UseEffectExample = () => {
  console.log("Component called");

  const [count, setCount] = useState(0);
  const [fake, setFake] = useState(0);

  const onIncrementClick = () => setCount((prev) => prev + 1);
  const onFakeClick = () => setFake((prev) => prev + 1);

  useEffect(() => {
    console.log("useEffect called");

    document.title = count.toString();
  }, [fake]);

  return (
    <>
      <div>
        {count}
        <button onClick={onIncrementClick}>INCREMENT</button>
      </div>
      <div>
        {fake}
        <button onClick={onFakeClick}>FAKE</button>
      </div>
    </>
  );
};
