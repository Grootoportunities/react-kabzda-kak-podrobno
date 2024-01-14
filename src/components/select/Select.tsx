import React, { useState } from "react";
import { ItemType } from "../accordion/Accordion.stories";

type SelectProps = {
  selectTitle: string;
  onChange: (id: string) => void;
  items: ItemType[];
};

export const Select: React.FC<SelectProps> = ({
  selectTitle,
  onChange,
  items,
}) => {
  const [collapse, setCollapse] = useState<boolean>(true);

  const onClickTitleHandler = () => setCollapse(!collapse);
  const onBlurTitleHandler = () => setCollapse(true);

  const onLiCLickHandler = (id: string) => {
    onChange(id);
    setCollapse(true);
  };

  const mappedItems = items.map((i) => (
    <li onClick={() => onLiCLickHandler(i.id)} key={i.id}>
      {i.title}
    </li>
  ));

  return (
    <div>
      <div onClick={onClickTitleHandler}>{selectTitle}</div>
      {!collapse && (
        <ul autoFocus onBlur={onBlurTitleHandler}>
          {mappedItems}
        </ul>
      )}
    </div>
  );
};
