import { Accordion } from "./Accordion";
import { useState } from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "Accordion",
  component: Accordion,
};

const callback = "Accordion has been changed";

export const UncollapsedAccordion = () => (
  <Accordion
    heading={"UncollapsedAccordion"}
    turned={false}
    onClick={action(callback)}
  />
);
export const CollapsedAccordion = () => (
  <Accordion
    heading={"CollapsedAccordion"}
    turned={true}
    onClick={action(callback)}
  />
);
export const ChangingAccordione = () => {
  const [collapse, setCollapse] = useState<boolean>(false);

  return (
    <Accordion
      heading={"ChangingAccordione"}
      turned={collapse}
      onClick={() => setCollapse(!collapse)}
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
