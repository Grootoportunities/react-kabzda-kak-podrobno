import { Rating, RatingValueType } from "./Rating";
import { useState } from "react";

export default {
  title: "Rating",
  component: Rating,
};

export const EmptyRating = () => <Rating value={0} onClick={() => {}} />;
export const RatingOneStar = () => <Rating value={1} onClick={() => {}} />;
export const RatingTwoStar = () => <Rating value={2} onClick={() => {}} />;
export const RatingThreeStar = () => <Rating value={3} onClick={() => {}} />;
export const RatingFourStar = () => <Rating value={4} onClick={() => {}} />;
export const RatingFiveStar = () => <Rating value={5} onClick={() => {}} />;
export const UncontrolledRating = () => {
  const [value, setValue] = useState<RatingValueType>(0);

  return <Rating value={value} onClick={setValue} />;
};
