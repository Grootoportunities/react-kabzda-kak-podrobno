import React, { ChangeEvent, useCallback, useMemo, useState } from "react";

export default {
  title: "Use Memo",
};

export const FactorialUseMemo = () => {
  const [a, setA] = useState(3);
  const [b, setB] = useState(3);

  let resultA = useMemo(() => {
    let tempA = 1;
    let wh = 1;

    while (wh < 100000000) {
      let random = Math.random();
      wh++;
    }

    for (let i = 1; i <= a; i++) tempA *= i;
    return tempA;
  }, [a]);
  let resultB = 1;

  for (let i = 1; i <= b; i++) resultB *= i;

  const onChangeAHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setA(Number(e.currentTarget.value));
  const onChangeBHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setB(+e.currentTarget.value); //Number() и + - тоже самое, приводит к типу.

  return (
    <>
      A: <input type={"number"} value={a} onChange={onChangeAHandler} />
      B: <input type={"number"} value={b} onChange={onChangeBHandler} />
      <hr />
      <div>A: {resultA}</div>
      <div>B: {resultB}</div>
    </>
  );
};

export const UsersMemo = (props: { users: string[] }) => {
  console.log("Users rendering");

  return (
    <div>
      {props.users.map((u, index) => (
        <div key={index}>{u}</div>
      ))}
    </div>
  );
};

const Users = React.memo(UsersMemo);

export const UseMemoInHelpForReactMemo = () => {
  console.log("useMemoInHelpForReactMemo");

  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([
    "Daniil",
    "Anastasia",
    "Maxim",
    "Jenya",
    "Nikita",
    "Edik",
  ]);

  const onClickCountHandler = () => setCount((prev) => prev + 1);
  const onClickAddUserHandler = () => setUsers(["Yarik", ...users]);

  const filteredUsers = useMemo(
    () => users.filter((u) => u.toLowerCase().indexOf("a") > -1),
    [users],
  );

  return (
    <>
      <button onClick={onClickCountHandler}>Increment</button>
      <button onClick={onClickAddUserHandler}>+Add User</button>
      {count}
      <Users users={filteredUsers} />
    </>
  );
};

type GamesProps = { callback: () => void };

export const GamesMemo: React.FC<GamesProps> = ({ callback }) => {
  console.log("Games rendering");

  return (
    <div>
      <button onClick={callback}>Add Game</button>
    </div>
  );
};

const Games = React.memo(GamesMemo);

export const LikeUseCallback = () => {
  console.log("UseCallback Rendering");

  const [count, setCount] = useState(0);
  const [games, setGames] = useState([
    "Baldur's Gate 3",
    "True Stalker",
    "Project Zomboid",
    "Fallout 4",
    "Kingdom Two Crowns",
  ]);

  const onClickCountHandler = () => setCount((prev) => prev + 1);

  // const memoizedAddGameHandler = useMemo(
  //   () => () => setGames(["Metro", ...games]),
  //   [games],
  // );

  const memoizedAddGameHandler = useCallback(() => {
    console.log(games);
    return setGames(["Metro", ...games]);
  }, [games]);

  return (
    <>
      <button onClick={onClickCountHandler}>Increment</button>
      {count}
      <Games callback={memoizedAddGameHandler} />
    </>
  );
};
