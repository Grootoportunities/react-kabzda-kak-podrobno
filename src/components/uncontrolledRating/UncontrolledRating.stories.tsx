import { UncontrolledRating } from "./UncontrolledRating";
import { action } from "@storybook/addon-actions";

export default {
  title: "Uncontrolled Rating",
  component: UncontrolledRating,
};

const callback = action("Value has been changed inside component");

export const UncontrolledRatingStory = () => (
  <UncontrolledRating onChange={callback} />
);
export const UncontrolledRatingOneStar = () => (
  <UncontrolledRating defaultValue={1} onChange={callback} />
);
export const UncontrolledRatingTwoStar = () => (
  <UncontrolledRating defaultValue={2} onChange={callback} />
);
export const UncontrolledRatingThreeStar = () => (
  <UncontrolledRating defaultValue={3} onChange={callback} />
);
export const UncontrolledRatingFourStar = () => (
  <UncontrolledRating defaultValue={4} onChange={callback} />
);
export const UncontrolledRatingFiveStar = () => (
  <UncontrolledRating defaultValue={5} onChange={callback} />
);
