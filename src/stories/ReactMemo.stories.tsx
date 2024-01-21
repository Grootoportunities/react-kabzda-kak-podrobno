import React, { useState } from "react";

export default {
  title: "React.memo demo",
};

export const MessagesCounter = (props: { count: number }) => (
  <div>{props.count}</div>
);
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

export const Example = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([
    "Daniil",
    "Anastasia",
    "Maxim",
    "Jenya",
    "Nikita",
  ]);

  const onClickCountHandler = () => setCount((prev) => prev + 1);
  const onClickAddUserHandler = () => setUsers(["Yarik", ...users]);

  return (
    <>
      <button onClick={onClickCountHandler}>+</button>
      <button onClick={onClickAddUserHandler}>Add User</button>
      <MessagesCounter count={count} />
      <Users users={users} />
    </>
  );
};
