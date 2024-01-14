import { Accordion } from "./Accordion";
import { useState } from "react";
import { action } from "@storybook/addon-actions";
import { v1 } from "uuid";

export default {
  title: "Accordion",
  component: Accordion,
};

export type ItemType = { id: string; title: string };

const callback = "Accordion has been changed";
const onClickCallback = (id: string) =>
  alert(`User with id ${id} should be happy`);

const users: ItemType[] = [
  { id: v1(), title: "Daniil" },
  { id: v1(), title: "Anastasia" },
  { id: v1(), title: "Igor" },
  { id: v1(), title: "Viktor" },
];

export const UncollapsedAccordion = () => (
  <Accordion
    heading={"UncollapsedAccordion"}
    turned={false}
    onClick={action(callback)}
    items={users}
    onClickCallback={onClickCallback}
  />
);
export const CollapsedAccordion = () => (
  <Accordion
    heading={"CollapsedAccordion"}
    turned={true}
    onClick={action(callback)}
    items={users}
    onClickCallback={onClickCallback}
  />
);
export const ChangingAccordione = () => {
  const [collapse, setCollapse] = useState<boolean>(false);

  return (
    <Accordion
      heading={"ChangingAccordione"}
      turned={collapse}
      onClick={() => setCollapse(!collapse)}
      items={users}
      onClickCallback={onClickCallback}
    />
  );
};

//--------------------

//import type { Meta, StoryObj } from "@storybook/react";
// import { useState } from "react";
// import { useState } from "react";
// import { action } from "@storybook/addon-actions";
//
// import { Accordion } from "./Accordion";
// import React, { useState } from "react";
//
// export default {
//   component: Accordion,
// };
//
// // const meta: Meta<typeof Accordion> = {
// //   component: Accordion,
// // };
// //
// // export default meta;
// //
// // type Story = StoryObj<typeof Accordion>;
// //
// // export const FirstStory: Story = {
// //   args: {
// //     heading: "Accordion",
// //     turned: true,
// //   },
// // };
//
// const onClickHandler = action("onClick");
//
// export const CollapsedAccordion = () => {
//   return (
//     <Accordion
//       heading={"Collapsed Accordion"}
//       turned={true}
//       onClick={onClickHandler}
//     />
//   );
// };
//
// export const UnCollapsedAccordion = () => {
//   return (
//     <Accordion
//       heading={"Unollapsed Accordion"}
//       turned={false}
//       onClick={() => {}}
//     />
//   );
// };
//
// export const AccordionDemo = () => {
//   const [collapse, setCollapse] = useState<boolean>(false);
//
//   return (
//     <Accordion
//       heading={"Accordion"}
//       turned={collapse}
//       onClick={() => setCollapse(!collapse)}
//     />
//   );
// };
