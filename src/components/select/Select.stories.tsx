import { Select } from "./Select";
import { v1 } from "uuid";
import { ItemType } from "../accordion/Accordion.stories";
import { useState } from "react";

export default {
  title: "Select",
  component: Select,
};

const cities: ItemType[] = [
  { id: v1(), title: "Minsk" },
  { id: v1(), title: "Kishinev" },
  { id: v1(), title: "Sarajevo" },
  { id: v1(), title: "Kosovo" },
];

export const SelectStory = () => {
  const [selectTitle, setSelectTitle] = useState<string>(
    "Choose city you want to live",
  );

  const onLiClickCallback = (id: string) => {
    const neededTitle = cities.find((c) => c.id === id);
    if (neededTitle) setSelectTitle(neededTitle.title);
  };

  return (
    <Select
      selectTitle={selectTitle}
      onChange={onLiClickCallback}
      items={cities}
    />
  );
};

export const FixedSelect = () => (
  <Select
    selectTitle={"You can't change me"}
    onChange={() => {}}
    items={cities}
  />
);
