import { ChangeEvent, useRef, useState } from "react";

export default {
  title: "input",
};

export const UncontrolledInput = () => <input />;

export const TrackUncontrolledInputValue = () => {
  const [value, setValue] = useState("");

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.currentTarget.value);

  return (
    <div>
      <input onChange={onChangeHandler} /> - {value}
    </div>
  );
};

export const GetValueOfUncontrolledInputByPressingButton = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const onClickHandler = () => {
    const inputValue = inputRef.current as HTMLInputElement;
    setValue(inputValue.value);
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={onClickHandler}>Save value</button>- {value}
    </div>
  );
};

export const InputWithFixedValue = () => <input value={"Не изменяй меня"} />;

export const ControlledInput = () => {
  const [value, setValue] = useState("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value);

  return <input value={value} onChange={onChangeHandler} />;
};

export const ControlledCheckbox = () => {
  const [value, setValue] = useState(false);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.checked);

  return <input type={"checkbox"} checked={value} onChange={onChangeHandler} />;
};

export const ControlledSelect = () => {
  const [value, setValue] = useState<string | undefined>(undefined);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) =>
    setValue(e.currentTarget.value);

  return (
    <select value={value} onChange={onChangeHandler}>
      <option>Нету!</option>
      <option value={1}>Praha</option>
      <option value={2}>Buenos Aires</option>
      <option value={3}>Brazilia</option>
    </select>
  );
};
