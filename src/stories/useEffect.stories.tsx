import { useEffect, useState } from "react";

export default { title: "useEffect" };

export const UseEffectExample = () => {
  console.log("useEffect called");

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
export const SetTimeoutExample = () => {
  console.log("Component called");

  const [count, setCount] = useState(0);
  const [fake, setFake] = useState(0);

  const onIncrementClick = () => setCount((prev) => prev + 1);
  const onFakeClick = () => setFake((prev) => prev + 1);

  useEffect(() => {
    setTimeout(() => {
      document.title = count.toString();

      console.log("setTimeout called");
    }, 5000);
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
export const SetIntervalExample = () => {
  console.log("Component called");

  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      console.log("setInterval called");
      setCount((prev) => prev + 1);
    }, 1000);
  }, []);

  return <>Counter: {count}</>;
};
export const Time = () => {
  console.log("Component called");

  const time = new Date();

  const [seconds, setSeconds] = useState(time.getSeconds());
  const [minutes, setMinutes] = useState(time.getMinutes());
  const [hours, setHours] = useState(time.getHours());

  useEffect(() => {
    setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  }, []);

  if (seconds === 60) {
    setSeconds(0);
    setMinutes((prev) => prev + 1);
  } else if (minutes === 60) {
    setSeconds(0);
    setMinutes(0);
    setHours((prev) => prev + 1);
  } else if (hours === 24) {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  }

  return (
    <>
      Time:{" "}
      {`${hours.toString().split("").length === 1 ? "0" + hours : hours}:${
        minutes.toString().split("").length === 1 ? "0" + minutes : minutes
      }:${seconds.toString().split("").length === 1 ? "0" + seconds : seconds}`}
    </>
  );
};
