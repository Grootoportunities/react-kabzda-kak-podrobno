import { useState } from "react";

export default { title: "useState" };

const foo = () => {
  console.log("foo");
  return 123;
};

export const Counter = () => {
  console.log("counter started");

  // const initialState = useMemo(foo, []);
  const [count, setCount] = useState(foo);

  const onIncrementClick = () => setCount((prev) => prev + 1);

  return (
    <>
      <button onClick={onIncrementClick}>INCREMENT</button> {count}
    </>
  );
};
