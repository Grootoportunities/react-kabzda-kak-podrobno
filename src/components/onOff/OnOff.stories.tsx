import { OnOff } from "./OnOff";
import { useState } from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "OnOff",
  component: OnOff,
};

const callback = "On or Off has been clicked";

export const OnMode = () => <OnOff on={true} setOn={action(callback)} />;
export const OffMode = () => <OnOff on={false} setOn={action(callback)} />;
export const ChangingMode = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return <OnOff on={toggle} setOn={setToggle} />;
};
