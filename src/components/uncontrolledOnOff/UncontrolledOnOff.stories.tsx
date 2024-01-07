import { UncontrolledOnOff } from "./UncontrolledOnOff";
import { action } from "@storybook/addon-actions";

export default {
  title: "Uncontrolled OnOff",
  component: UncontrolledOnOff,
};
export const UncontrolledOnOffStory = () => (
  <UncontrolledOnOff setOn={action("clicked")} />
);

export const UncontrolledOnDefault = () => (
  <UncontrolledOnOff defaultState setOn={action("clicked")} />
);

export const UncontrolledOffDefault = () => (
  <UncontrolledOnOff defaultState={false} setOn={action("clicked")} />
);
